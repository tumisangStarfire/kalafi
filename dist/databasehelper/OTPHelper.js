"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const MongoHelper_1 = require("../database/MongoHelper");
var ObjectId = require('mongodb').ObjectID;
class OTPHelper {
    static deleteOTP(id, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = yield MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('otp');
                var deleteParams = { _id: new ObjectId(id) };
                var result = query.deleteOne(deleteParams, function (err, res) {
                    if (err) {
                        console.log(err);
                    }
                    console.log(res);
                    return callback(res.deletedCount);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    /** functiont to save a new OTP code */
    static saveOTP(cellphone, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(cellphone);
                let otpcode = Math.floor(100000 + Math.random() * 900000);
                console.log(otpcode);
                const collection = MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('otp');
                var result = collection.insertOne({ cellphone: cellphone, otpcode: otpcode }, function (err, data) {
                    if (err) {
                        console.log(err);
                    }
                    //console.log(data);
                    return callback('OTP ID', data);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.OTPHelper = OTPHelper;
/** validates the otp and cellphone/email of the user */
OTPHelper.validateOTP = (otp, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collection = MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('otp');
        var findParams = { cellphone: otp.getCellphone, otpcode: otp.getOtpCode };
        var result = yield collection.findOne(findParams, function (err, res) {
            if (err) {
                console.log(err);
            }
            const otp = res;
            console.log(otp);
            //if it exists delete it from the db 
            if (otp !== null) {
                OTPHelper.deleteOTP(otp.getID, resp => {
                    console.log(resp);
                });
            }
        });
    }
    catch (error) {
        console.log(error);
    }
});
//# sourceMappingURL=OTPHelper.js.map