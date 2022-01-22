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
class HealthFacilityService {
}
exports.default = HealthFacilityService;
HealthFacilityService.getHealthFacilities = (callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //const query = await MongoHelper.client.db('kalafi').collection('healthfacilities');
        const query = MongoHelper_1.MongoHelper.getDatabase().collection('healthfacilities');
        query.find({}).toArray(function (err, res) {
            if (err) {
                // console.log(err);
                var jsonres = {
                    status: 'failed',
                    message: 'failed to fetch health facility data',
                    data: {},
                };
                return callback(jsonres);
            }
            var healthFacility;
            healthFacility = res;
            return callback(healthFacility);
        });
    }
    catch (error) {
        console.log(error);
    }
});
//# sourceMappingURL=HealthFacilityService.js.map