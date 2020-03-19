import * as express from 'express';
import { User } from '../../models/User';
// DB

//outside the application
export const forgotpassword = async (request: express.Request, response: express.Response) => {
    try {
        //user clicks reset password from login page,users enters cellphone number, application verifies the cellphone number 
        //after verification is successfull application sends OTP code, user enters their OTP code,mobile App redirects to reset password page, user enters new password, re enter password. 
        //after changing password application Logins in. 
        var cellphone = request.body.cellphone;
        var otp_code = request.body.otp_code;
        var password = request.body.password;
        let query = '';
    } catch (error) {
        console.log(error);
    }
}

//inside the application
export const resetpasssword = async (request: express.Request, response: express.Response) => {

}