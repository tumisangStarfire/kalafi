
import { createFile, deleteFileAfterUpload } from '../controller/FileCreaterController';
import  MedicalFile  from "../models/MedicalFile";
import { MongoHelper } from "../database/MongoHelper";
import uuid from 'uuid'; 
import { ObjectId } from 'mongodb';
import fs from 'fs';
import AWS from 'aws-sdk';
import dotenv from 'dotenv';

// Create S3 service object
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});


export default  class MedicalFileService {
    /**creates and saves a new medicalfile for a patinet */
    static storeReferenceToDatabase = async (medicalFile: MedicalFile, callback) => {
        try {
            const query = await MongoHelper.getDatabase().collection('medicalfile');
            var result = await query.insertOne(medicalFile, function (err, data) {
                if (err) {
                    console.log(err);
                }
                console.log(data)
                return callback(data.insertedId);
            });

        } catch (error) {
            console.log(error);
        }
    }
    /**base 64 file */
    static uploadMedicalFile = async (medicalFile: MedicalFile, callback) => {
        try {
            //parameters we are going to use to upoad the file, Buckt is the name of the s3 bucket name, Key simply means the path, body is the actual file. 
            var uploadParams = {
                Bucket: process.env.AWS_BUCKET,
                Key: '',
                Body: ''
            };

            let ext = '.png';

            medicalFile.setFilePath = 'MedicalFile/' + medicalFile.userId  + '/' + medicalFile.getFileName + '-' + uuid() + ext;

            await createFile(medicalFile.getFileName, medicalFile.getBase64File, ext, result => {
                //result has the created file path on the system
                console.log(result);
                //read the created file
                var fileStream = fs.createReadStream(result);

                //pass the file to the body 
               // uploadParams.Body = fileStream;
                //pass the filename to key  
                uploadParams.Key = medicalFile.getfilePath;

                fileStream.on('error', function (err) {
                    console.log('File Error', err);
                });

                s3.upload(uploadParams, async function (err, data) {
                    if (err) {
                        console.log(err);
                        const jsonResponse = {
                            message: 'something went wrong please try again',
                            status: 'failed',
                            statusCode: 501
                        }
                        return callback(err);

                    }
                    if (data.Location !== null) { //check if the file has been uploaded to s3,
                        console.log("Upload Success", data.Location);

                        //if upload is complete to s3, then save the records to db 
                        var date_today = new Date();
                        medicalFile.setDateUploaded = date_today.toLocaleDateString();
                        console.log(medicalFile);

                        await this.create(medicalFile, result => {
                            console.log(result);
                            return callback(result);
                        });
                    }
                });

            });
        } catch (error) {
            console.log(error);
        }
    }

    static removeUploadedFile = async (id, callback) => {
        try {
            //first the the s3key from the Database, use the key to remove th file from s3, after that delete from DB 
            const collection = await MongoHelper.client.db('kalafi').collection('medicalfile');
            var result = await collection.findOne({ _id: new ObjectId(id) }, async function (err, res) {
                console.log(err);
                if (err) {
                    console.log(err);
                    return callback(err);

                }
                console.log(res);
                var medicalFile: MedicalFile = res; // pass the medical fiel result to the Class
                const deleteParams = {
                    Bucket: process.env.AWS_BUCKET,
                    Key: '',
                }
                deleteParams.Key = medicalFile.getfilePath;  //pass it to the deleteParams json oject 

                await s3.deleteObject(deleteParams, function (s3err, data) {
                    if (s3err) {
                        console.log(s3err);
                        return callback(s3err);
                    }
                    console.log(data);
                    //after deleting the file on s3, delete it from db

                });

                await collection.deleteOne({ _id: new ObjectId(id) }, function (deleteErr, res) {
                    if (deleteErr) {
                        console.log('delete Err', deleteErr);
                        return callback(deleteErr);
                    }
                });


            });
        } catch (error) {
            console.log(error);
        }

    }


    /**return all images/files of the user */
    static getMedicalFilesUsingUserId = async (userId, callback) => {
        try {
            const collection = MongoHelper.client.db('kalafi').collection('medicalFiles');
            var result = collection.findOne({ _id: new ObjectId(userId) }, function (err, res) {
                if (err) {
                    console.log(err);

                } else {

                    if (res !== null) {
                        //Take the row data and pass it into the object
                        console.log(res);
                        var downloadOptions = {
                            Bucket: process.env.AWS_BUCKET,
                            Key: '',
                        };
                        //this returns a object  [ { id:1 ,  filename : name : file_path : path }]  
                        var mediclFileArray: Array<MedicalFile>;
                        mediclFileArray.push(res);

                        mediclFileArray.forEach(row => {
                            downloadOptions.Key = row.getfilePath;
                            callback.attachment(row.getFileName);
                            var fileStream = s3.getObject(downloadOptions).createReadStream();
                            fileStream.pipe(callback);

                        });

                    } else {
                        const jsonResponse = {
                            message: 'something wrong please try again',
                            status: 'failed',
                            statusCode: 501
                        }
                        return callback(jsonResponse);
                    }
                }

            });
        } catch (error) {
            console.log(error);
        }
    }




}