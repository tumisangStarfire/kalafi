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
const MongoHelper_1 = require("../database/MongoHelper");
var ObjectId = require('mongodb').ObjectID;
const FileCreaterController_1 = require("../controller/FileCreaterController");
const AWS = require('aws-sdk');
const fs = require('fs');
const uuid = require('uuid');
// Create S3 service object
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});
class UserProfileHelper {
}
exports.UserProfileHelper = UserProfileHelper;
/**  static exposes the function to the class, without having to create a new class every time when trying to get the function */
UserProfileHelper.create = (userProfile, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = yield MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('userprofile');
        var result = yield query.insertOne(userProfile, function (err, data) {
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
UserProfileHelper.update = (userProfile, id, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = yield MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('userprofile');
        var result = query.updateOne({ _id: new ObjectId(id) }, { userProfile }, function (err, res) {
            if (err) {
                console.log(err);
            }
            console.log(res);
            return callback(res.upsertedId);
        });
    }
    catch (error) {
        console.log(error);
    }
});
UserProfileHelper.getUserProfile = (userId, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collection = MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('userprofile');
        var result = collection.findOne({ _id: userId }, function (err, res) {
            if (err) {
                console.log(err);
            }
            var userProfile = res;
            console.log(userProfile);
            return callback(userProfile);
        });
    }
    catch (error) {
        console.log(error);
    }
});
UserProfileHelper.uploadProfilePicture = (base64File, userId, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //first s3 upload profile picture, then update column 
        var uploadParams = {
            Bucket: process.env.AWS_BUCKET,
            Key: '',
            Body: ''
        };
        const filename = 'profilePicture';
        let ext = '.png';
        yield FileCreaterController_1.createFile(filename, base64File, ext, result => {
            console.log(result);
            //return callback(result);   
            //  create the Path for s3 add the guuid at the end, read the file using a stream
            let filePath = 'Users/' + 'ProfilePictures/' + userId + '/' + filename + '-' + uuid() + ext;
            var fileStream = fs.createReadStream(result);
            uploadParams.Key = filePath;
            uploadParams.Body = fileStream;
            fileStream.on('error', function (err) {
                console.log('File Error', err);
            });
            s3.upload(uploadParams, function (err, data) {
                if (err) {
                    console.log("Error", err);
                }
                if (data) {
                    console.log("Upload Success", data.Location);
                    var deleteFile = FileCreaterController_1.deleteFileAfterUpload(result);
                    const jsonResponse = {
                        message: 'upload finished' + data.Location,
                        status: 'success',
                        statusCode: 200
                    };
                    return callback(jsonResponse);
                }
            });
        });
    }
    catch (error) {
        console.log(error);
    }
});
//# sourceMappingURL=UserProfileHelper.js.map