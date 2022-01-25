"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileCreaterController_1 = require("../controller/FileCreaterController");
const MongoHelper_1 = require("../database/MongoHelper");
const uuid_1 = require("uuid");
const mongodb_1 = require("mongodb");
const fs_1 = require("fs");
const aws_sdk_1 = require("aws-sdk");
// Create S3 service object
const s3 = new aws_sdk_1.default.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});
class MedicalFileService {
}
exports.default = MedicalFileService;
/**creates and saves a new medicalfile for a patinet */
MedicalFileService.storeReferenceToDatabase = (medicalFile, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = yield MongoHelper_1.MongoHelper.getDatabase().collection('medicalfile');
        var result = yield query.insertOne(medicalFile, function (err, data) {
            if (err) {
                console.log(err);
            }
            console.log(data);
            return callback(data.insertedId);
        });
    }
    catch (error) {
        console.log(error);
    }
});
/**base 64 file */
MedicalFileService.uploadMedicalFile = (medicalFile, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //parameters we are going to use to upoad the file, Buckt is the name of the s3 bucket name, Key simply means the path, body is the actual file. 
        var uploadParams = {
            Bucket: process.env.AWS_BUCKET,
            Key: '',
            Body: ''
        };
        let ext = '.png';
        medicalFile.setFilePath = 'MedicalFile/' + medicalFile.userId + '/' + medicalFile.getFileName + '-' + uuid_1.default() + ext;
        yield FileCreaterController_1.createFile(medicalFile.getFileName, medicalFile.getBase64File, ext, result => {
            //result has the created file path on the system
            console.log(result);
            //read the created file
            var fileStream = fs_1.default.createReadStream(result);
            //pass the file to the body 
            // uploadParams.Body = fileStream;
            //pass the filename to key  
            uploadParams.Key = medicalFile.getfilePath;
            fileStream.on('error', function (err) {
                console.log('File Error', err);
            });
            s3.upload(uploadParams, function (err, data) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (err) {
                        console.log(err);
                        const jsonResponse = {
                            message: 'something went wrong please try again',
                            status: 'failed',
                            statusCode: 501
                        };
                        return callback(err);
                    }
                    if (data.Location !== null) { //check if the file has been uploaded to s3,
                        console.log("Upload Success", data.Location);
                        //if upload is complete to s3, then save the records to db 
                        var date_today = new Date();
                        medicalFile.setDateUploaded = date_today.toLocaleDateString();
                        console.log(medicalFile);
                        yield this.create(medicalFile, result => {
                            console.log(result);
                            return callback(result);
                        });
                    }
                });
            });
        });
    }
    catch (error) {
        console.log(error);
    }
});
MedicalFileService.removeUploadedFile = (id, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //first the the s3key from the Database, use the key to remove th file from s3, after that delete from DB 
        const collection = yield MongoHelper_1.MongoHelper.client.db('kalafi').collection('medicalfile');
        var result = yield collection.findOne({ _id: new mongodb_1.ObjectId(id) }, function (err, res) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(err);
                if (err) {
                    console.log(err);
                    return callback(err);
                }
                console.log(res);
                var medicalFile = res; // pass the medical fiel result to the Class
                const deleteParams = {
                    Bucket: process.env.AWS_BUCKET,
                    Key: '',
                };
                deleteParams.Key = medicalFile.getfilePath; //pass it to the deleteParams json oject 
                yield s3.deleteObject(deleteParams, function (s3err, data) {
                    if (s3err) {
                        console.log(s3err);
                        return callback(s3err);
                    }
                    console.log(data);
                    //after deleting the file on s3, delete it from db
                });
                yield collection.deleteOne({ _id: new mongodb_1.ObjectId(id) }, function (deleteErr, res) {
                    if (deleteErr) {
                        console.log('delete Err', deleteErr);
                        return callback(deleteErr);
                    }
                });
            });
        });
    }
    catch (error) {
        console.log(error);
    }
});
/**return all images/files of the user */
MedicalFileService.getMedicalFilesUsingUserId = (userId, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collection = MongoHelper_1.MongoHelper.client.db('kalafi').collection('medicalFiles');
        var result = collection.findOne({ _id: new mongodb_1.ObjectId(userId) }, function (err, res) {
            if (err) {
                console.log(err);
            }
            else {
                if (res !== null) {
                    //Take the row data and pass it into the object
                    console.log(res);
                    var downloadOptions = {
                        Bucket: process.env.AWS_BUCKET,
                        Key: '',
                    };
                    //this returns a object  [ { id:1 ,  filename : name : file_path : path }]  
                    var mediclFileArray;
                    mediclFileArray.push(res);
                    mediclFileArray.forEach(row => {
                        downloadOptions.Key = row.getfilePath;
                        callback.attachment(row.getFileName);
                        var fileStream = s3.getObject(downloadOptions).createReadStream();
                        fileStream.pipe(callback);
                    });
                }
                else {
                    const jsonResponse = {
                        message: 'something wrong please try again',
                        status: 'failed',
                        statusCode: 501
                    };
                    return callback(jsonResponse);
                }
            }
        });
    }
    catch (error) {
        console.log(error);
    }
});
//# sourceMappingURL=MedicalFileService.js.map