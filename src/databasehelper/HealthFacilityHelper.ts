import { HealthFacility } from "../models/HealthFacility";
import { MongoHelper } from "../database/MongoHelper";
const fs = require("fs");


export class HealthFacilityHelper {

    static getHealthFacilities = async callback => {
        try {
            const query = await MongoHelper.client.db('Mooki_Development').collection('healthfacilities');
            query.find({}).toArray(function (err, res) {
                if (err) {
                    console.log(err)
                }
                var healthFacility: Array<HealthFacility>;
                healthFacility = res;
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