import { databaseConnector } from "database/databaseConnector";
import { OTP } from "models/OTP";
import * as generateOTP from '../services/generateOTP.js';


export class OTPLogic {
    static async deleteOTP(id, callback) {
        try {
            const connection = await databaseConnector();
            let query = 'Delete FROM OTP WHERE id =' + id;
            connection.query(query, function (err, result) {
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
                console.log(result);
                return callback(result);
            });
            connection.release();

        } catch (error) {
            console.log(error);
        }
    }
    /** functiont to save a new OTP code */
    static async saveOTP(cellphone, callback) {
        try {
            //let otp_code = generateOTP;
            //console.log(otp_code);
            //generate otp service to create OTP codes
            const newOTP = new OTP(cellphone, 11111);
            const connection = await databaseConnector();
            var result = connection.query('insert into otp set ?', [newOTP], function (err, result) {
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
                    console.log(result.insertId > 0)
                    var jsonResponse = {
                        message: 'otp saved',
                        status: 'succcess'
                    }
                    return callback(jsonResponse);
                }

            });

        } catch (error) {
            console.log(error);
        }
    }

    /** validates the otp and cellphone/email of the user */
    static validateOTP = async (otp: OTP, callback) => {
        try {
            var result = false; //final response to five back 
            //let cellphone = cellphone; //validations for cellphone
            const connection = await databaseConnector();
            let query = 'select id from otp where cellphone =' + connection.escape(otp.getCellphone) + ' AND otpcode =' + connection.escape(otp.getOtpCode);
            await connection.query(query, function (err, rows, fields) {
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
                    console.log(rows)
                    if (rows[0].id > 0) {
                        result = true;
                        OTPLogic.deleteOTP(rows.id, res => {
                            return callback(result);
                        }); ///err : still not clear, supposed to delete otp if it valid
                        //if otp valid delete it from the table
                        // response.send({ message: result, status: "success" }).status(200) 

                    } else {
                        console.log(result);
                        // response.send({ message: result, status: "failed" }).status(404); 
                        return callback(result);
                    }
                }

            });
            connection.release();
        } catch (error) {
            console.log(error);
        }
    }

}