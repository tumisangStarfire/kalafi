
import { Region } from "models/Region";
import { MongoHelper } from "../database/MongoHelper";


export class RegionHelper {
    //check if email exists,
    //generate OTP code 
    //save the opt code 
    // send the otp code to the user 
    //validate otp code, if valid set the user.validated column to true, 
    // resendOTP code, delete the previous one,  

    static getRegions = async callback => {
        try {
            const query = await MongoHelper.client.db('Mooki_Development').collection('otp');
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