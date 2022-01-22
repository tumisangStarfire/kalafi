"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoHelper_1 = require("../database/MongoHelper");
const fs = require("fs");
class RegionService {
}
exports.default = RegionService;
RegionService.getRegions = callback => {
    try {
        const query = MongoHelper_1.MongoHelper.getDatabase().collection('regions');
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
};
//# sourceMappingURL=RegionService.js.map