"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class Region extends mongoose_1.Document {
    constructor(regionId, regionName, storageId) {
        super();
        this._id = storageId;
        this.regionId = regionId;
        this.regionName = regionName;
    }
    get getStorageId() {
        return this._id;
    }
    set getStorageId(storageId) {
        this._id = storageId;
    }
    get getRegionId() {
        return this.regionId;
    }
    set setRegionId(regionId) {
        this.regionId = regionId;
    }
    get getRegionName() {
        return this.regionName;
    }
    set setRegionName(regionName) {
        this.regionName = regionName;
    }
}
exports.Region = Region;
//# sourceMappingURL=Region.js.map