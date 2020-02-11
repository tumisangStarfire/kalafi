import { databaseConnector } from '../database/databaseConnector';

export class CurrentMedication {
  id?: number;
  userId: number;
  pillName: string;
  date_prescribed: Date;
  dailyDosage: number;

  constructor(userId: number, pillName: string, date_prescribed: Date, dailyDosage: number) {
    this.userId = userId;
    this.pillName = pillName;
    this.date_prescribed = date_prescribed;
    this.dailyDosage = dailyDosage;
  } 

  

  


}
