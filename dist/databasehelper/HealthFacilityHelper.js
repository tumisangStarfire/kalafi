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
class HealthFacilityHelper {
}
exports.HealthFacilityHelper = HealthFacilityHelper;
HealthFacilityHelper.getHealthFacilities = (callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = yield MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('healthfacilities');
        query.find({}).toArray(function (err, res) {
            if (err) {
                var JsonResponse = {
                    status: 'failed',
                    message: 'failed to fetch health facility data',
                    data: {},
                    code: 404
                };
                console.log(err);
                var jsonres = JsonResponse;
                return callback(jsonres);
            }
            var healthFacility;
            healthFacility = res;
            var jsonres;
            jsonres.status = 'success';
            jsonres.message = 'Health facility data has been fetched';
            jsonres.data = healthFacility;
            jsonres.code = 200;
            return callback(jsonres);
        });
    }
    catch (error) {
        console.log(error);
    }
});
HealthFacilityHelper.uploadHealthFacilityData = (callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataFile = fs.readFileSync("./injury.json");
        const healthfacilitiesData = JSON.parse(dataFile); //pass the data as a JSON JSON object
        const query = yield MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('typesofinjuries');
        query.insertMany(healthfacilitiesData, function (err, res) {
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
//# sourceMappingURL=HealthFacilityHelper.js.map