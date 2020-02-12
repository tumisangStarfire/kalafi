import { HealthFacility } from "../models/HealthFacility";
import { MongoHelper } from "../database/MongoHelper";


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
}