
export class PillPrescription {
  
  
  pillName: string;
  datePrescribed: Date;
  dailyDosage: number;
  numberOfPillsGiven?: number;
  numberOfPillsUsed?: number;

  constructor(pillName: string, datePrescribed: Date, dailyDosage: number) {
    this.pillName = pillName;
    this.datePrescribed = datePrescribed;
    this.dailyDosage = dailyDosage;

  }
  //gets the prescriptions remaining pills
  static getRemainingPills(numberOfPillsGiven: number, numberOfPillsUsed: number) {
    let result = numberOfPillsGiven - numberOfPillsUsed;
    return result;
  }



}
