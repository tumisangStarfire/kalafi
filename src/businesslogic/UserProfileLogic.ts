import { databaseConnector } from '../database/databaseConnector';
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


export class UserProfileLogic {
    /**  static exposes the function to the class, without having to create a new class every time when trying to get the function */
    static create = async (userProfile: UserProfile, callback) => {
        try {
            const connection = await databaseConnector();
            await connection.query('insert into userProfile set ?', [userProfile], function (err, res) {
                //Do not throw err as it will crash the server. 
                if (err) {
                    console.log(err.message);
                    //rollback the operation  
                    connection.end();
                    const jsonResponse = {
                        message: 'something went wrong please try again',
                        status: 'failed',
                        statusCode: 501
                    }
                    return callback(jsonResponse);

                } else {
                    if (res.insertId < 0) {
                        const jsonResponse = {
                            message: 'data saved',
                            status: 'success',
                            statusCode: 200
                        }
                        return callback(jsonResponse);
                    } else {
                        const jsonResponse = {
                            message: 'something wrong please try again',
                            status: 'failed',
                            statusCode: 501
                        }
                        return jsonResponse;
                    }
                }
                // console.log(res);

            });
            connection.release();
        } catch (error) {
            console.log(error)
        }
    }

    static update = async (userProfile: UserProfile, id, callback) => {
        try {

            const connection = await databaseConnector();
            await connection.query('update users set ? where userId = ', [userProfile, id], function (err, row, fields) {
                //Do not throw err as it will crash the server. 
                if (err) {
                    console.log(err.message);
                    //rollback the operation  
                    connection.end();
                    const jsonResponse = {
                        message: 'something went wrong please try again',
                        status: 'failed',
                        statusCode: 501
                    }
                    return callback(jsonResponse);

                } else {
                    console.log(row);
                    if (row.affectedRows < 0) {
                        var jsonResponse = {
                            message: 'profile updated',
                            status: 'success',
                            statusCode: 200
                        }
                        callback(jsonResponse);
                    } else {
                        var jsonResponse = {
                            message: 'profile update failed',
                            status: 'failed',
                            statusCode: 501
                        }
                        callback(jsonResponse);
                    }
                }

            });
            connection.release();
        } catch (error) {
            console.log(error)
        }
    }

    static getUserProfile = async (userId, callback) => {
        try {
            const connection = await databaseConnector();
            await connection.query('select * from userprofile where =' + userId, function (err, rows, fields) {
                //Do not throw err as it will crash the server. 
                if (err) {
                    console.log(err.message);
                    //rollback the operation  
                    connection.end();
                    const jsonResponse = {
                        message: 'something went wrong please try again',
                        status: 'failed',
                        statusCode: 501
                    }
                    return callback(jsonResponse);

                }
                console.log(rows);
                var userProfile: UserProfile = rows;
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