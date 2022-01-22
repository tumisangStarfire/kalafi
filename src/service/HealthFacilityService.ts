
import { MongoHelper } from "../database/MongoHelper";
import { JsonResponseInterface } from "../interfaces/JsonResponseInterface";
const fs = require("fs");
import HealthFacility from '../models/HealthFacility';


export default class HealthFacilityService {

    static getHealthFacilities = async callback => {
        try {
            //const query = await MongoHelper.client.db('kalafi').collection('healthfacilities');
            const query = MongoHelper.getDatabase().collection('healthfacilities');
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

                return callback(healthFacility);
            });
        } catch (error) {
            console.log(error);
        }
    }
}
