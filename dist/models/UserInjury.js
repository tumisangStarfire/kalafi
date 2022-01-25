"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserInjury {
    constructor(_id, userId, bloodPressure, temperature, injury, healthFacility, medicationPrescribed, dateOfInjury, doctorsNotes, pulseRate, recordedOn) {
        this._id = _id;
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
    get getId() {
        return this._id;
    }
    set setId(_id) {
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
}
exports.default = UserInjury;
//# sourceMappingURL=UserInjury.js.map