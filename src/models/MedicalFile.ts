import { MedicalFileType } from "./MedicalFileType";
import { databaseConnector } from "database/databaseConnector";
import { createFile, deleteFileAfterUpload } from '../controller/FileCreaterController';
const uuid = require('uuid');

const fs = require('fs');
const AWS = require('aws-sdk');
const dotenv = require('dotenv');

// Create S3 service object
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

export class MedicalFile implements MedicalFileType {
    id?: number;
    medical_file_type_id: number; /**the id of te medical file type */

    userId: number; /** users id*/

    private date_uploaded?: string;

    /**storage path in s3 */
    //s3 bucket -> Medical Files-> userId-> File Types (X-Rays)->file name  
    private filePath?: string;

    /**Filename given by the User i.e left leg scan */
    private fileName: string;


    /** BASE 64 encdoded file */
    private base64Stringfile: string;

    /**constructo */
    constructor(userId: number, medical_file_type_id: number, fileName: string, base64Stringfile: string, date_uploaded?: string, filePath?: string) {
        this.userId = userId;
        this.medical_file_type_id = medical_file_type_id;
        this.fileName = fileName;
        this.base64Stringfile = base64Stringfile;
        this.date_uploaded = date_uploaded;
        this.filePath = filePath;

    }

    /**accessors */
    public get getFileName(): string {
        return this.fileName;
    }
    public set setFileName(value: string) {
        this.fileName = value;
    }

    public get getfilePath(): string {
        return this.filePath;
    }
    public set setFilePath(filePath: string) {
        this.filePath = filePath;
    }

    public get getMedical_file_type_id(): number {
        return this.medical_file_type_id;
    }
    public set setMedical_file_type_id(value: number) {
        this.medical_file_type_id = value;
    }

    public get getDateUploaded(): string {
        return this.date_uploaded;
    }

    public set setDateUploaded(date_uploaded: string) {
        this.date_uploaded = date_uploaded;
    }

    public get getBase64File(): string {
        return this.base64Stringfile;
    }

    public set setBase54File(base64Stringfile: string) {
        this.base64Stringfile = base64Stringfile;
    }



    /**creates and saves a new medicalfile for a patinet */
    static create = async (medicalFile: MedicalFile, callback) => {
        try {
            const connection = await databaseConnector();
            await connection.query('insert into MedicalFile set ?', [medicalFile], function (err, res) {
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
                    console.log(res);
                    if (res.insertId !== null) {
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
                        return callback(jsonResponse);
                    }
                }

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
            
            medicalFile.setFilePath = 'MedicalFile/' + medicalFile.userId + '/' + medicalFile.getMedical_file_type_id + '/' + medicalFile.getFileName + '-' + uuid() + ext;

            await createFile(medicalFile.getFileName, medicalFile.getBase64File, ext, result => {
                //result has the created file path on the system
                console.log(result);
                //read the created file
                var fileStream = fs.createReadStream(result);

                //pass the file to the body 
                uploadParams.Body = fileStream;
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

                        await MedicalFile.create(medicalFile, result => {
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
            //first the the key from the Database, use the key to remove th file from s3, after that delete from DB 
            const connection = await databaseConnector();
            let query = connection.query('select * from MedicalFile where id =' + connection.escape(id));
            await query.on('error', function (err, res, fields) {
                console.log(err);
                if (err) {
                    console.log(err);
                    const jsonResponse = {
                        message: 'something went wrong please try again',
                        status: 'failed',
                        statusCode: 501
                    }
                    return callback(err);

                }
            }).on('result', function (row, index) {
                // index refers to the statement this result belongs to (starts at 0)  
                console.log(row);
                var medicalFile: MedicalFile = row; // pass the medical fiel result to the Class
                const deleteParams = {
                    Bucket: process.env.AWS_BUCKET,
                    Key: '',
                }

                deleteParams.Key = medicalFile.getfilePath;  //pass it to the deleteParams json oject 

                s3.deleteObject(deleteParams, function (s3err, data) {
                    if (s3err) {
                        console.log(s3err);
                        return callback(s3err);
                    }
                    console.log(data);
                    //after deleting the file on s3, delete it from db
                    connection.query('delete from medicalfile where id =' + connection.escape(id), function (deleteErr, res) {
                        if (deleteErr) throw deleteErr;
                        if (row.affectedRows < 0) { /** get the number of affected rows */
                            const jsonResponse = {
                                message: 'removed',
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
                            return callback(jsonResponse);
                        }
                    });

                });


            });
        } catch (error) {
            console.log(error);
        }

    }


    /**return all images/files of the user */
    static getMedicalFiles = async (userId, callback) => {
        try {
            const connection = await databaseConnector();
            let query = 'select * from MedicalFile where userId=' + connection.escape(userId);
            await connection.query(query, function (err, rows, fields) {
                if (err) {
                    console.log(err);
                    const jsonResponse = {
                        message: 'something went wrong please try again',
                        status: 'failed',
                        statusCode: 501
                    }
                    return callback(jsonResponse);

                } else {
                    if (rows !== null) {
                        //Take the row data and pass it into the object
                        console.log(rows);
                        var downloadOptions = {
                            Bucket: process.env.AWS_BUCKET,
                            Key: '',
                        };
                        //this returns a object  [ { id:1 ,  filename : name : file_path : path }]  
                        var mediclFileArray: Array<MedicalFile>;
                        mediclFileArray.push(rows);

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