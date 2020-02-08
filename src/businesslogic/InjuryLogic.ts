import { databaseConnector } from '../database/databaseConnector';
import { Injury } from 'models/Injury';

export class InjuryLogic {
    /** save the vitals , afterwards save the injury, save the PillPresriptio data  */
    static create = async (injury: Injury, callback) => {
        try {
            const connection = await databaseConnector();
            await connection.query('insert into Injury set ?', [injury], function (err, res) {
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

    static remove = async (id, callback) => {
        try {
            const connection = await databaseConnector();
            let query = 'delete from Injury where id=' + connection.escape(id);
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
                            statusCode: 501
                        }
                        return callback(jsonResponse);
                    }
                }


            });

        } catch (error) {
            console.log(error);
        }
    }

    static getUserInjuries = async (userId, callback) => {
        try {
            const connection = await databaseConnector();
            let query = 'select * from Injury where userId=' + connection.escape(userId);
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
                    if (rows !== null) {
                        console.log(rows);
                        var injury: Injury = rows;
                        return callback(injury);
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
}