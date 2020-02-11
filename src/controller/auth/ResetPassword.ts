import * as express from 'express';
import { IUser } from 'models/User';
// DB
const mysqlconnection = require('database/databaseConnector.js');

//outside the application
export const forgotpassword = async (request: express.Request, response: express.Response) => {
    try {
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