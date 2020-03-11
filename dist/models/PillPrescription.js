"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PillPrescription {
    constructor(pillName, date_prescribed, dailyDosage) {
        this.pillName = pillName;
        this.date_prescribed = date_prescribed;
        this.dailyDosage = dailyDosage;
    }
    //gets the prescriptions remaining pills
    static getRemainingPills(pillsGiven, pillsUsed) {
        let result = pillsGiven - pillsUsed;
        return result;
    }
}
exports.PillPrescription = PillPrescription;
//# sourceMappingURL=PillPrescription.js.map