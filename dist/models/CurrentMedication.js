"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CurrentMedication {
    constructor(_id, userId, name, datePrescribed, dailyDosage, frequency, pharmacy) {
        this._id = _id;
        this.userId = userId;
        this.frequency = frequency;
        this.name = name;
        this.datePrescribed = datePrescribed;
        this.dailyDosage = dailyDosage;
        this.pharmacy = pharmacy;
    }
    get getId() {
        return this._id;
    }
    set getId(_id) {
        this._id = _id;
    }
    get getUserId() {
        return this.userId;
    }
    set setUserId(userId) {
        this.userId = userId;
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
    get getDatePrescribed() {
        return this.datePrescribed;
    }
    set setDatePrescribed(datePrescribed) {
        this.datePrescribed = datePrescribed;
    }
    get getDailyDosage() {
        return this.dailyDosage;
    }
    set setFrequency(frequency) {
        this.frequency = frequency;
    }
    get getFrequency() {
        return this.frequency;
    }
    set setPharmacy(pharmacy) {
        this.pharmacy = pharmacy;
    }
    get getPharmacy() {
        return this.pharmacy;
    }
}
exports.default = CurrentMedication;
//# sourceMappingURL=CurrentMedication.js.map