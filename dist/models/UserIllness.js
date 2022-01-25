"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**Illness has vitals */
class UserIllness {
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
    constructor(_id, userId, bloodPressure, temperature, illness, dateOfDiagnosis, medicationPrescribed, healthFacility, doctorsNotes, storageId, pulseRate, recordedOn) {
        this._id = _id;
        this.userId = userId;
        this.bloodPressure = bloodPressure;
        this.temperature = temperature;
        this.illness = illness;
        this.dateOfDiagnosis = dateOfDiagnosis;
        this.pulseRate = pulseRate;
        this.recordedOn = recordedOn;
        this.doctorsNotes = doctorsNotes;
        this.medicationPrescribed.push(medicationPrescribed);
        this.healthFacility = healthFacility;
    }
    get getId() {
        return this._id;
    }
    set setStorageId(_id) {
        this._id = _id;
    }
    get getUserId() {
        return this.userId;
    }
    set setUserId(userId) {
        this.userId = userId;
    }
    get getBloodPressure() {
        return this.bloodPressure;
    }
    set setBloodPressure(bloodPressure) {
        this.bloodPressure = bloodPressure;
    }
    get getTemperature() {
        return this.temperature;
    }
    set setTemperature(temperature) {
        this.temperature = temperature;
    }
    get getIllness() {
        return this.illness;
    }
    set setIllness(illness) {
        this.illness = illness;
    }
    get getPulserate() {
        return this.pulseRate;
    }
    set setPulseRate(pulseRate) {
        this.pulseRate = pulseRate;
    }
    get getDateofDiagnosis() {
        return this.dateOfDiagnosis;
    }
    set setDateofDiagnosis(dateOfDiagnosis) {
        this.dateOfDiagnosis = dateOfDiagnosis;
    }
    get getRecordedOn() {
        return this.recordedOn;
    }
    set setRecordedOn(recordedOn) {
        this.recordedOn = recordedOn;
    }
    get getDoctorsNotes() {
        return this.doctorsNotes;
    }
    set setDoctorsNotes(doctorsNotes) {
        this.doctorsNotes = doctorsNotes;
    }
    get getHealthFacility() {
        return this.healthFacility;
    }
    set setHealthFacility(healthFacility) {
        this.healthFacility = healthFacility;
    }
    addIllnessPills(medicationPrescribed) {
        this.medicationPrescribed.push(medicationPrescribed);
    }
    removePillPrescription(medicationPrescribed) {
        //this.medicationPrescribed.
    }
    getPillPrescriptions() {
        return this.medicationPrescribed;
    }
}
exports.default = UserIllness;
//# sourceMappingURL=UserIllness.js.map