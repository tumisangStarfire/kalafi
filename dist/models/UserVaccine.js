"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class UserVaccine extends mongoose_1.Document {
    /**vaccination dcocument Structure
     * _id : ObjectId(121221qwqwqw)
     * userID :   ObjectId(23232wewew)
     * date_administered : 2003-11-04
     * vaccines :{
     *    "id": 1,
          "name": "Measles",
          "typeofVacineRef": 1
     * },
        healthFacility : {
           "id": 102,
          "name": "Physio Hub",
          "region": 1,
          "Speciality": {}
        }
     */
    constructor(userId, vaccine, dateAdministered, healthFacility, storageId) {
        super();
        this._id = storageId;
        this.userId = userId;
        this.vaccine = vaccine;
        this.dateAdministered = dateAdministered;
        this.healthFacility = healthFacility;
    }
}
exports.UserVaccine = UserVaccine;
//# sourceMappingURL=UserVaccine.js.map