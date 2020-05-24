import { databaseConnector } from "../database/databaseConnector";
import { PillPrescription } from "models/PillPrescription";
import { JsonResponseInterface } from "../interfaces/JsonResponseInterface";

export class PillPrescriptionLogic {
    static create = async (pillPrescription: PillPrescription, callback) => {
        try {
            const connection = await databaseConnector();
            await connection.query('insert into PillPrescription set ?', [pillPrescription], function (err, res) {
                //Do not throw err as it will crash the server.
                if (err) {
                    console.log(err.message);
                    //rollback the operation
                    connection.end();
                    const jsonResponse : JsonResponseInterface = {
                        message: 'something went wrong please try again',
                        status: 'failed',
                        data: err
                    }
                    return callback(jsonResponse);

                }
                //console.log(res);
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

            });
            connection.release();
        } catch (error) {

        }
    }

    /**API call to get various pill information */
}