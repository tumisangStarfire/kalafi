import { databaseConnector } from '../database/databaseConnector';
import { Address } from 'models/Address';

export class AddressLogic {
    
    static create = async (address: Address, callback) => {
        try {
            const connection = await databaseConnector();
            await connection.query('insert into Address ?', [address], function (err, res) {
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
            connection.release();
        } catch (error) {
            console.log(error);
        }
    }

    static update = async (address: Address, addressId, callback) => {
        try {
            const connection = await databaseConnector();
            connection.query('update Address set ? where id = ', [address, addressId], function (err, row, fields) {
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
                    console.log(row);
                    if (row.affectedRows < 0) {
                        var jsonResponse = {
                            message: 'adresss updated',
                            status: 'success',
                            statusCode: 200
                        }
                        callback(jsonResponse);
                    } else {
                        var jsonResponse = {
                            message: 'Adress failed to update',
                            status: 'failed',
                            statusCode: 501
                        }
                        callback(jsonResponse);
                    }
                }

            });
            connection.release();
        } catch (error) {
            console.log(error);

        }
    }

}