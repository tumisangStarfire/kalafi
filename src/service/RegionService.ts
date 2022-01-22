
import  Region  from "../models/Region";
import { MongoHelper } from "../database/MongoHelper";
const fs = require("fs");


export default class RegionService {

    static getRegions =  callback => {
        try {
            const query =  MongoHelper.getDatabase().collection('regions');
            query.find({}).toArray(function (err, res) {
                if (err) {
                    console.log(err)
                }
                var region: Array<Region>;
                region = res;
                return callback(region);
            });
        } catch (error) {
            console.log(error);
        }
    }

}