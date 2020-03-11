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
const fs = require("fs");
class RegionHelper {
}
exports.RegionHelper = RegionHelper;
//check if email exists,
//generate OTP code 
//save the opt code 
// send the otp code to the user 
//validate otp code, if valid set the user.validated column to true, 
// resendOTP code, delete the previous one,  
RegionHelper.getRegions = (callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = yield MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('region');
        query.find({}).toArray(function (err, res) {
            if (err) {
                console.log(err);
            }
            var region;
            region = res;
            return callback(region);
        });
    }
    catch (error) {
        console.log(error);
    }
});
RegionHelper.uploadRegionData = (callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataFile = fs.readFileSync("./regions.json");
        const regionData = JSON.parse(dataFile); //pass the data as a JSON JSON object
        const query = yield MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('region');
        query.insertMany(regionData, function (err, res) {
            if (err) {
                console.log(err);
            }
            /**get the number of inserted data */
            return callback(res.insertedCount);
        });
    }
    catch (error) {
        console.log(error);
    }
});
//# sourceMappingURL=RegionHelper.js.map