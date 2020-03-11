const fs = require('fs');
const AWS = require('aws-sdk');
const dotenv = require('dotenv');
const guuid = require('../services/generateGUID.js')
var path = require('path');

// Create S3 service object
s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});
dotenv.config();
// call S3 to retrieve upload file to specified bucket
var uploadParams = {
    Bucket: process.env.AWS_BUCKET,
    Key: '',
    Body: ''
};

var file = '';

//read the file 
var fileStream = fs.createReadStream(file);

fileStream.on('error', function (err) {
    console.log('File Error', err);
});

//pass the file to the body 
uploadParams.Body = fileStream;
//pass the filename to key  
uploadParams.Key = 'Media/Docs/' + path.basename(file);

// call S3 to retrieve upload file to specified bucket 
const uploadFile = () => {

    s3.upload(uploadParams, function (err, data) {
        if (err) {
            console.log("Error", err);
        }
        if (data) {
            console.log("Upload Success", data.Location);
        }
    });
}

uploadFile();