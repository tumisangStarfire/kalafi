
import nodemailer from 'nodemailer';
import  aws from 'aws-sdk';
import dotenv from 'dotenv';

// create Nodemailer SES transporter 
dotenv.config()
let transporter = nodemailer.createTransport({
    SES: new aws.SES({
        apiVersion: '2010-12-01',

        'accessKeyId': process.env.MAIL_USERNAME,
        'secretAccessKey': process.env.MAIL_PASSWORD,
        'region': process.env.SES_REGION,
    })
});

export const sendEmail = async (to, subject = null, text, attachmemt = null) =>{
    let info = await transporter.sendMail({
        from: 'healthcard@mookidigitalhealth.co.bw',
        to: to,
        subject: subject,
        text: text,
        html: "<b>Thank you for beta registration, we will send you a link to download our beta platfrom once it is ready</b>" // html body
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}