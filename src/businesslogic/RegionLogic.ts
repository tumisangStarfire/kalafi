import { databaseConnector } from "database/databaseConnector";
import { Region } from "models/Region";


export class RegionLogic {
    //check if email exists,
    //generate OTP code 
    //save the opt code 
    // send the otp code to the user 
    //validate otp code, if valid set the user.validated column to true, 
    // resendOTP code, delete the previous one,  

    static getRegions = async callback => {
        try {
            let query = 'SELECT * FROM region';
            const connection = await databaseConnector();
            await connection.query(query, function (err, rows, fields) {
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
                    console.log(rows);
                    var region: Region = rows;
                    return callback(region);
                }

            });
            connection.release();
        } catch (error) {
            console.log(error);
        }
    }
}