"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class Vaccine extends mongoose_1.Document {
    constructor(vaccineType, name, id, storageId) {
        super();
        this._id = storageId;
        this.id = id;
        this.name = name;
        this.vaccineType = vaccineType;
    }
}
exports.Vaccine = Vaccine;
//# sourceMappingURL=Vaccine.js.map