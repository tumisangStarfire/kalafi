import { databaseConnector } from '../database/databaseConnector';
import { PillPrescription } from './PillPrescription';
import { Vitals } from './Vitals';

export class Injury {

  private id?: number;
  private userId: number;
  private injuryType: string;
  private date_of_injury: Date;
  private vitals: Vitals;
  private medicationPrescribed: Array<PillPrescription>; //pills given to the patient [ { id: 1 } ]
  private doctorsNotes?: string;

  constructor(userId: number, injuryType: string, date_of_injury: Date, doctorsNotes?: string) {
    this.userId = userId;
    this.injuryType = injuryType;
    this.date_of_injury = date_of_injury;
    this.doctorsNotes = doctorsNotes;
  }

  addInjuryPills(medicationPrescribed: PillPrescription) {
    this.medicationPrescribed.push(medicationPrescribed);
  }  

  get getUserId():number{ 
    return this.userId;
  } 
  set setUserId(userId:number){ 
    this.userId = userId;
  }




}
