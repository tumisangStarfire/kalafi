let nodemailer = require('nodemailer');
let aws = require('aws-sdk');
const dotenv = require('dotenv');

// create Nodemailer SES transporter 
dotenv.config();

let transporter = nodemailer.createTransport({
    SES: new aws.SES({
        apiVersion: '2010-12-01',

        'accessKeyId': process.env.MAIL_USERNAME,
        'secretAccessKey': process.env.MAIL_PASSWORD,
        'region': process.env.SES_REGION,
    })
});


const sendEmail = async (to, subject = null, text, attachmemt = null) => {
    // send mail with defined transport object 
    let info = transporter.sendMail({
        from: 'healthcard@mookidigitalhealth.co.bw',
        to: to,
        subject: subject,
        text: text,
        html: "<b>Email sent over node js</b>" // html body
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });

}

module.exports = sendEmail();