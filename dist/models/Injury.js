"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Injury {
    /** when you create the injury add vitals information to create a complete document
     *
     * {
     *    objectID(23232ewwewwee),
     *    userID : 212121212
     *    injuryType : Leg Burn
     *    date of injury : 2013-04-23,
     *    pillPrescription : { _id : objectId, name : paracetamol },
     *    vitals: { temp: 39, bp: 85  }
     *    doctorsNotes :
     *    healthFacility : {
     *      id: 2,
     *      name: Extension 2 Clinic,
     *      region :1
     *      speciality :{}
     *
     *    }
     *
     * }
     *
     */
    constructor(userId, vitals, healthFacility, injuryType, date_of_injury, doctorsNotes) {
        this.userId = userId;
        this.injuryType = injuryType;
        this.date_of_injury = date_of_injury;
        this.doctorsNotes = doctorsNotes;
        this.vitals = vitals;
        this.healthFacility = healthFacility;
    }
    addInjuryPills(medicationPrescribed) {
        this.medicationPrescribed.push(medicationPrescribed);
    }
}
exports.Injury = Injury;
//# sourceMappingURL=Injury.js.map