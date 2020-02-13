
import { PillPrescription } from './PillPrescription';
import { Vitals } from './Vitals';
import { ObjectId } from 'mongodb';

export class Injury {

  _id: ObjectId;
  userId: string;
  injuryType: string;
  date_of_injury: Date;
  medicationPrescribed: Array<PillPrescription>;
  vitals: Vitals; //pills given to the patient [ { id: 1 } ]
  doctorsNotes?: string;

  /** when you create the injury add vitals information to create a complete document
   * 
   * { 
   *    objectID(23232ewwewwee), 
   *    userID : 212121212 
   *    injuryType : Leg Burn 
   *    date of injury : 2013-04-23,
   *    pillPrescription : { _id : objectId, name : paracetamol }, 
   *    vitals: { temp: 39, bp: 85  }
   *    doctorsNotes : 
   * 
   * } 
   * 
   */
  constructor(userId: string, vitals: Vitals, injuryType: string, date_of_injury: Date, doctorsNotes?: string) {

    this.userId = userId;
    this.injuryType = injuryType;
    this.date_of_injury = date_of_injury;
    this.doctorsNotes = doctorsNotes;
    this.vitals = vitals;
  }

  addInjuryPills(medicationPrescribed: PillPrescription) {
    this.medicationPrescribed.push(medicationPrescribed);
  }

}
