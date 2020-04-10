"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CurrentMedicalCondition {
    constructor(userId, conditionName, dateofDiagnosis, healthFacility, storageId) {
        this._id = storageId;
        this.userId = userId;
        this.conditionName = conditionName;
        this.dateofDiganosis = dateofDiagnosis;
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
    get getConditionName() {
        return this.conditionName;
    }
    set setConditionName(conditionName) {
        this.conditionName = conditionName;
    }
    get getDateofDignosis() {
        return this.dateofDiganosis;
    }
    set setDateofDignosis(dateofDiganosis) {
        this.dateofDiganosis = dateofDiganosis;
    }
    get getHealthFacility() {
        return this.healthFacility;
    }
    set setHealthFacility(healthFacility) {
        this.healthFacility = healthFacility;
    }
}
exports.CurrentMedicalCondition = CurrentMedicalCondition;
//# sourceMappingURL=CurrentMedicalCondition.js.map