
export default class PillPrescription {
  
  
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
 



}
