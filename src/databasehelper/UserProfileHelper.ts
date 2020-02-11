import { MongoHelper } from '../database/MongoHelper';
var ObjectId = require('mongodb').ObjectID;
import { UserProfile } from 'models/UserProfile';
import { createFile, deleteFileAfterUpload } from '../controller/FileCreaterController';
const AWS = require('aws-sdk');
const fs = require('fs');
const uuid = require('uuid');

// Create S3 service object
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});


export class UserProfileHelper {
    /**  static exposes the function to the class, without having to create a new class every time when trying to get the function */
    static create = async (userProfile: UserProfile, callback) => {
        try {
            const query = await MongoHelper.client.db('Mooki_Development').collection('userprofile');
            var result = await query.insertOne(userProfile, function (err, data) {
                if (err) {
                    console.log(err);
                }
                console.log(data)
                return callback(data.insertedId);
            });
        } catch (error) {
            console.log(error)
        }
    }

    static update = async (userProfile: UserProfile, id, callback) => {
        try {

            const query = await MongoHelper.client.db('Mooki_Development').collection('userprofile');
            var result = query.updateOne({ _id: new ObjectId(id) }, { userProfile }, function (err, res) {
                if (err) {
                    console.log(err);
                }
                console.log(res)
                return callback(res.upsertedId);
            });

        } catch (error) {
            console.log(error)
        }
    }

    static getUserProfile = async (userId, callback) => {
        try {
            const collection = MongoHelper.client.db('Mooki_Development').collection('userprofile');

            var result = collection.findOne({ _id: new ObjectId(userId) }, function (err, res) {
                if (err) {
                    console.log(err);
                }
                var userProfile: UserProfile = res;

                console.log(userProfile);
                return callback(userProfile);
            });

        } catch (error) {
            console.log(error);
        }
    }

    static uploadProfilePicture = async (base64File, userId, callback) => {
        try {
            //first s3 upload profile picture, then update column 
            var uploadParams = {
                Bucket: process.env.AWS_BUCKET,
                Key: '',
                Body: ''
            };
            const filename = 'profilePicture';
            let ext = '.png';

            await createFile(filename, base64File, ext, result => {
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
                        var deleteFile = deleteFileAfterUpload(result);
                        const jsonResponse = {
                            message: 'upload finished' + data.Location,
                            status: 'success',
                            statusCode: 200
                        }
                        return callback(jsonResponse);
                    }
                });
            });

        } catch (error) {
            console.log(error);
        }
    }

}