
export class PillPrescription {
  id?: number;
  pillPrescribedToTreatment: number; // what was the pill presribed to illness/injury
  pillName: string;
  date_prescribed: Date;
  dailyDosage: number;
  pillsGiven?: number;
  pillsUsed?: number;

  constructor(pillName: string, date_prescribed: Date, dailyDosage: number) {
    this.pillName = pillName;
    this.date_prescribed = date_prescribed;
    this.dailyDosage = dailyDosage;

  }
  //gets the prescriptions remaining pills
  static getRemainingPills(pillsGiven: number, pillsUsed: number) {
    let result = pillsGiven - pillsUsed;
    return result;
  }



}
