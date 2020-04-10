"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class VaccineType extends mongoose_1.Document {
    constructor(id, typeofVaccine, decription, storageId) {
        super();
        this._id = storageId;
        this.id = id;
        this.typeofVaccine = typeofVaccine;
        this.description = this.description;
    }
    get getStorageId() {
        return this._id;
    }
    set getStorageId(storageId) {
        this._id = storageId;
    }
}
exports.VaccineType = VaccineType;
//# sourceMappingURL=VaccineType.js.map