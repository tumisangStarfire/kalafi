"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
/**Illness has vitals */
class Illness extends mongoose_1.Document {
    /** when you create the illness add vitals information to create a complete document
   *
   * {
   *    objectID(23232ewwewwee),
   *    userID : 212121212
   *    type_of_illness : Stomach
   *    date of injury : 2013-04-23,
   *    pillPrescription : { _id : objectId, name : paracetamol },
   *    vitals: { temp: 39, bp: 85  }
   *    doctorsNotes :
   *    healthFacility : {
   *        id :1,
   *        name: Extension 2 Clinic,
   *        region :1
   *        speciality :{}
   *
   *    }
   *
   * }
   *
   */
    constructor(userId, type_of_illness, date_of_diagnosis, vitals, healthFacility, doctorsNotes) {
        super();
        this.userId = userId;
        this.type_of_illness = type_of_illness;
        this.date_of_diagnosis = date_of_diagnosis;
        this.doctorsNotes = doctorsNotes;
        this.vitals = vitals;
        this.healthFacility = healthFacility;
    }
    addInjuryPills(medicationPrescribed) {
        this.medicationPrescribed.push(medicationPrescribed);
    }
}
exports.Illness = Illness;
//# sourceMappingURL=Illness.js.map