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
const nodemailer_1 = require("nodemailer");
const aws_sdk_1 = require("aws-sdk");
const dotenv_1 = require("dotenv");
// create Nodemailer SES transporter 
dotenv_1.default.config();
let transporter = nodemailer_1.default.createTransport({
    SES: new aws_sdk_1.default.SES({
        apiVersion: '2010-12-01',
        'accessKeyId': process.env.MAIL_USERNAME,
        'secretAccessKey': process.env.MAIL_PASSWORD,
        'region': process.env.SES_REGION,
    })
});
exports.sendEmail = (to, subject = null, text, attachmemt = null) => __awaiter(void 0, void 0, void 0, function* () {
    let info = yield transporter.sendMail({
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
});
//# sourceMappingURL=SendMailService.js.map