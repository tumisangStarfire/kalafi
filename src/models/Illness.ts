import { PillPrescription } from "./PillPrescription";
import { databaseConnector } from '../database/databaseConnector';
import { Vitals } from "./Vitals";

/**Illness has vitals */
export class Illness {

    id?: number;
    userId: number;
    type_of_illness: string;
    date_of_diagnosis: Date;
    doctorsNotes?: string;
    medicationPrescribed: Array<PillPrescription>;
    vitals: Vitals;


    constructor(userId: number, type_of_illness: string, date_of_diagnosis: Date, vitals: Vitals, doctorsNotes?: string) {
        this.userId = userId;
        this.type_of_illness = type_of_illness;
        this.date_of_diagnosis = date_of_diagnosis;
        this.doctorsNotes = doctorsNotes;
        this.vitals = vitals;
    }

    addInjuryPills(medicationPrescribed: PillPrescription) {
        this.medicationPrescribed.push(medicationPrescribed);
    }
    /**creates and saves a new illness a patient has gone through */
    static create = async (illness: Illness, callback) => {
        try {
            const connection = await databaseConnector();
            await connection.query('insert into illness set ?', [illness], function (err, res) {
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


        } catch (error) {
            console.log(error);
        }
    }
    /**removes any illness data */
    static remove = async (id, callback) => {
        try {
            const connection = await databaseConnector();
            let query = 'delete from illness where id=' + connection.escape(id);
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
                            statusCode: 400
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
    /**return historical data of patients illness */
    static getUserIllness = async (userId, callback) => {
        try {
            const connection = await databaseConnector();
            let query = 'select * from illness where userId=' + connection.escape(userId);
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
                        var illness: Illness = rows;
                        return callback(illness);
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
}