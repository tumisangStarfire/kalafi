"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vaccination {
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
    constructor(userId, typeOfVaccination, date_administered, healthFacility) {
        this.userId = userId;
        this.typeOfVaccination = typeOfVaccination;
        this.date_administered = date_administered;
        this.healthFacility = healthFacility;
    }
}
exports.Vaccination = Vaccination;
//# sourceMappingURL=Vaccination.js.map