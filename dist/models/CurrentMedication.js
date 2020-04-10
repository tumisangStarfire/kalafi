"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class CurrentMedication extends mongoose_1.Document {
    constructor(userId, pillName, datePrescribed, dailyDosage, frequency, storageId) {
        super();
        this._id = storageId;
        this.userId = userId;
        this.frequency = frequency;
        this.pillName = pillName;
        this.datePrescribed = datePrescribed;
        this.dailyDosage = dailyDosage;
    }
    get getStorageId() {
        return this._id;
    }
    set getStorageId(storageId) {
        this._id = storageId;
    }
    get getUserId() {
        return this.userId;
    }
    set setUserId(userId) {
        this.userId = userId;
    }
    get getPillName() {
        return this.pillName;
    }
    set setPillName(pillName) {
        this.pillName = pillName;
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
    set setPharmaceutical(pharmaceutical) {
        this.pharmaceutical = pharmaceutical;
    }
    get getPharmaceutical() {
        return this.pharmaceutical;
    }
}
exports.CurrentMedication = CurrentMedication;
//# sourceMappingURL=CurrentMedication.js.map