import { OTP } from "../models/OTP";
import generateOTP = require("../services/generateOTP");
import { MongoHelper } from "../database/MongoHelper";
var ObjectId = require('mongodb').ObjectID;


export class OTPHelper {

    static async deleteOTP(id, callback) {
        try {
            const query = await MongoHelper.client.db('Mooki_Development').collection('otp');
            var deleteParams = { _id: new ObjectId(id) };
            var result = query.deleteOne(deleteParams, function (err, res) {
                if (err) {
                    console.log(err);
                }
                console.log(res)
                return callback(res.deletedCount);
            });

        } catch (error) {
            console.log(error);
        }
    }

    /** functiont to save a new OTP code */
    static async saveOTP(cellphone: number, callback) {
        try {
            console.log(cellphone);
            let otpcode = Math.floor(100000 + Math.random() * 900000);
            console.log(otpcode);

            const collection = MongoHelper.client.db('Mooki_Development').collection('otp');
            var result = collection.insertOne({ cellphone: cellphone, otpcode: otpcode }, function (err, data) {
                if (err) {
                    console.log(err);
                }
                //console.log(data);
                return callback('OTP ID', data);
            });


        } catch (error) {
            console.log(error);
        }
    }

    /** validates the otp and cellphone/email of the user */
    static validateOTP = async (otp: OTP, callback) => {
        try {
            const collection = MongoHelper.client.db('Mooki_Development').collection('otp');
            var findParams = { cellphone: otp.getCellphone, otpcode: otp.getOtpCode }
            var result = await collection.findOne(findParams, function (err, res) {
                if (err) {
                    console.log(err);
                }
                const otp: OTP = res;
                console.log(otp);

                //if it exists delete it from the db 
                if (otp !== null) {
                    OTPHelper.deleteOTP(otp.getStorageId, resp => {
                        console.log(resp)
                    });
                }

            });
        } catch (error) {
            console.log(error);
        }
    }

}