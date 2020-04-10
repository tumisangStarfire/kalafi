"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PillPrescription {
    constructor(pillName, datePrescribed, dailyDosage) {
        this.pillName = pillName;
        this.datePrescribed = datePrescribed;
        this.dailyDosage = dailyDosage;
    }
    //gets the prescriptions remaining pills
    static getRemainingPills(numberOfPillsGiven, numberOfPillsUsed) {
        let result = numberOfPillsGiven - numberOfPillsUsed;
        return result;
    }
}
exports.PillPrescription = PillPrescription;
//# sourceMappingURL=PillPrescription.js.map