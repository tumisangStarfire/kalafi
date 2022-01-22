"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class UserInjury extends mongoose_1.Document {
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
    constructor(userId, bloodPressure, temperature, injury, healthFacility, medicationPrescribed, dateOfInjury, doctorsNotes, storageId, pulseRate, recordedOn) {
        super();
        this._id = storageId;
        this.userId = userId;
        this.dateOfInjury = dateOfInjury;
        this.bloodPressure = bloodPressure;
        this.temperature = temperature;
        this.injury = injury;
        this.pulseRate = pulseRate;
        this.doctorsNotes = doctorsNotes;
        this.recordedOn = recordedOn;
        this.medicationPrescribed.push(medicationPrescribed);
        this.healthFacility = healthFacility;
    }
    get getStorageId() {
        return this._id;
    }
    set setStorageId(storageId) {
        this._id = storageId;
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
    get getInjury() {
        return this.injury;
    }
    set setInjury(injury) {
        this.injury = injury;
    }
    get getPulserate() {
        return this.pulseRate;
    }
    set setPulseRate(pulseRate) {
        this.pulseRate = pulseRate;
    }
    get getDateofInjury() {
        return this.dateOfInjury;
    }
    set setDateofInjury(dateOfInjury) {
        this.dateOfInjury = dateOfInjury;
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
    addInjuryPills(medicationPrescribed) {
        this.medicationPrescribed.push(medicationPrescribed);
    }
    removePillPrescription(medicationPrescribed) {
        //this.medicationPrescribed.
    }
    getPillPrescriptions() {
        return this.medicationPrescribed;
    }
}
exports.UserInjury = UserInjury;
//# sourceMappingURL=UserInjury.js.map