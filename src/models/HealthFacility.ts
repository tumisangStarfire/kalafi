import { Region } from '../models/Region'
import { databaseConnector } from '../database/databaseConnector';

export class HealthFacility {
    id?: number;
    latitude: number;
    longitude: number;
    name: string;

    static getData = async callback => {
        try {
            let query = 'SELECT * FROM HealthFacility';
            const conn = await databaseConnector();
            await conn.query(query, function (connectionErr, rows, fields) {
                if (connectionErr) throw connectionErr;
                console.log(rows);
                if (rows !== null) {
                    var jsonResponse = {
                        message: 'data retrieved',
                        status: 'success',
                        statusCode: 200,
                    }
                    var healthFacilities: HealthFacility = rows;
                    return callback(healthFacilities);
                } else {
                    var jsonResponse = {
                        message: 'data failed to retrive',
                        status: 'failed',
                        statusCode: 400,
                    }
                    return callback(jsonResponse);
                }

            });
        } catch (error) {

        }
    }


}