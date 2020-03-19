
import { Region } from "models/Region";
import { MongoHelper } from "../database/MongoHelper";
const fs = require("fs");


export class RegionHelper {
    //check if email exists,
    //generate OTP code 
    //save the opt code 
    // send the otp code to the user 
    //validate otp code, if valid set the user.validated column to true, 
    // resendOTP code, delete the previous one,  

    static getRegions = async callback => {
        try {
            const query = await MongoHelper.client.db('Mooki_Development').collection('region');
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

    static uploadRegionData = async callback => {
        try {
            const dataFile = fs.readFileSync("./regions.json");

            const regionData = JSON.parse(dataFile); //pass the data as a JSON JSON object
            const query = await MongoHelper.client.db('Mooki_Development').collection('region');
            query.insertMany(regionData, function (err, res) {
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