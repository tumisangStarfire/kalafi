import { databaseConnector } from '../database/databaseConnector';
import { CurrentMedication } from 'models/CurrentMedication';

export class CurrentMedicationLogic {

    static create = async (CurrentMedication: CurrentMedication, callback) => {
        try {
            const connection = await databaseConnector();
            await connection.query('insert into CurrentMedication set ?', [CurrentMedication], function (err, res) {
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
                            statusCode: 404
                        }
                        return callback(jsonResponse);
                    }
                }

            });
        } catch (error) {

        }
    }

    static remove = async (id, callback) => {
        try {
            const connection = await databaseConnector();
            let query = 'delete from CurrentMedication where id=' + connection.escape(id);
            await connection.query(query, function (err, row) {
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

                    if (row.affectedRows < 0) { /** get the number of affected rows */
                        const jsonResponse = {
                            message: 'removed',
                            status: 'success',
                            statusCode: 200
                        }
                        return callback(jsonResponse);
                    } else {
                        const jsonResponse = {
                            message: 'something wrong please try again',
                            status: 'failed',
                            statusCode: 404
                        }
                        return callback(jsonResponse);
                    }
                }


            });

        } catch (error) {
            console.log(error);
        }
    }

    static getData = async (userId, callback) => {
        try {

            const connection = await databaseConnector();
            await connection.query('select * from CurrentMedication where =' + userId, function (err, rows, fields) {
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
                    if (rows !== null) {
                        var jsonResponse = {
                            message: 'data retrieved',
                            status: 'success',
                            statusCode: 200,
                        }
                        var currentMedication: CurrentMedication = rows;
                        return callback(currentMedication);
                    } else {
                        var jsonResponse = {
                            message: 'data failed to retrive',
                            status: 'failed',
                            statusCode: 404,
                        }
                        return callback(jsonResponse);
                    }

                }
            });
            //relea
            connection.release();
        } catch (error) {

        }
    }
}