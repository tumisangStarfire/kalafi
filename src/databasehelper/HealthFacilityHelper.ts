import { HealthFacility } from "../models/HealthFacility";
import { MongoHelper } from "../database/MongoHelper";
import { JsonResponseInterface } from "../interfaces/JsonResponseInterface";
const fs = require("fs");


export class HealthFacilityHelper {

    static getHealthFacilities = async callback => {
        try {
            const query = await MongoHelper.client.db('Mooki_Development').collection('healthfacilities');
            query.find({}).toArray(function (err, res) {
                if (err) {

                    // console.log(err);
                    var jsonres : JsonResponseInterface = {
                        status: 'failed',
                        message: 'failed to fetch health facility data',
                        data: {},

                    }    ;
                    return callback(jsonres);
                }
                var healthFacility: Array<HealthFacility>;
                healthFacility = res;

               /* var jsonres : JsonResponseInterface = {
                    status: 'success',
                    message: 'Health facility data has been fetched',
                    data:healthFacility,

                } ;*/

                return callback(healthFacility);
            });
        } catch (error) {
            console.log(error);
        }
    }

    static uploadHealthFacilityData = async callback => {
        try {
            const dataFile = fs.readFileSync("./injury.json");

            const healthfacilitiesData = JSON.parse(dataFile); //pass the data as a JSON JSON object
            const query = await MongoHelper.client.db('Mooki_Development').collection('typesofinjuries');
            query.insertMany(healthfacilitiesData, function (err, res) {
                if (err) {
                    console.log(err);
                }
                /**get the number of inserted data */
                return callback(res.insertedCount);
            });
        } catch (error) {
            console.log(error);
        }
    }
}
