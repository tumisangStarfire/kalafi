import { databaseConnector } from '../database/databaseConnector';
import { User } from 'models/User';


export class UserLogic extends User {

    
    /**function to save a new user registration, it wil be called by the Registration Controller */
    static create = async (user: User, callback) => {
        try {
            const connection = await databaseConnector();
            user.setVerified = false;
            user.setStatus = 0;
            await connection.query('insert into users set ?', [user], function (err, userId) {
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
                    if (userId.insertId !== null) {
                        /*** create Profile function, create Address function 
                        const createProfile = UserProfile.create(userId.insertId, result => {
                          console.log('profile', result);
                        });
            
                        const createAddress = Address.create(userId.insertId, result => {
                          console.log('address', result);
                        });*/
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
            connection.release();

        } catch (error) {
            console.log(error);
        }
    }

    static validateUserPhoneNumber = async (cellphone, callback) => {
        try {
            var result = false; //final response to five back 
            //let cellphone = cellphone; //validations for cellphone
            const connection = await databaseConnector();
            let query = 'select count(1) as valid from customer where cellphone =' + connection.escape(cellphone);
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
                    console.log(rows)
                    if (rows[0].valid > 0) {
                        result = true
                        // response.send({ message: result, status: "success" }).status(200) 
                        return callback(result);
                    } else {
                        console.log(result);
                        // response.send({ message: result, status: "failed" }).status(404); 
                        return callback(result);
                    }
                }

            });
            return result;
            connection.release();
        } catch (error) {
            console.log(error);
        }
    }

    static validateUserAccount = async (cellphone, otpcode) => {
        try {
            // call the send otp function,  


        } catch (error) {
            console.log(error);
        }
    }
}