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
const RegionHelper_1 = require("../databasehelper/RegionHelper");
/** get all the regions/distrits */
function getAllRegions(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield RegionHelper_1.RegionHelper.getRegions(result => {
                console.log(result);
                return response.json(result);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.getAllRegions = getAllRegions;
function uploadRegionData(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield RegionHelper_1.RegionHelper.uploadRegionData(result => {
                console.log(result);
                return response.json(result).status(200);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.uploadRegionData = uploadRegionData;
//# sourceMappingURL=RegionController.js.map