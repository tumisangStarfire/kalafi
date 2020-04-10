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
                    var JsonResponse = {
                        status: 'failed',
                        message: 'failed to fetch health facility data', 
                        data: {},
                        code: 404
                    }   
                     console.log(err);
                    var jsonres : JsonResponseInterface = JsonResponse ; 
                    return callback(jsonres);
                }
                var healthFacility: Array<HealthFacility>;
                healthFacility = res; 

                var jsonres : JsonResponseInterface; 
                jsonres.status = 'success';
                jsonres.message = 'Health facility data has been fetched'; 
                jsonres.data = healthFacility; 
                jsonres.code =200;
                return callback(jsonres);
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