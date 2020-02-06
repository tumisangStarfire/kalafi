export class PillPrescription {
    constructor(pillName, date_prescribed, dailyDosage) {
        this.pillName = pillName;
        this.date_prescribed = date_prescribed;
        this.dailyDosage = dailyDosage;
    }
    //gets the prescriptions remaining pills
    getRemainingPills(pillsGiven, pillsUsed) {
        let result = pillsGiven - pillsUsed;
        return result;
    }
}
//# sourceMappingURL=PillPrescription.js.map