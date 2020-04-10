
import { PillPrescription } from './PillPrescription';

import { ObjectId } from 'mongodb';
import { HealthFacility } from './HealthFacility';

export class Injury {

  _id: ObjectId;
  userId: string;
  injuryType: string;
  date_of_injury: Date;
  medicationPrescribed: Array<PillPrescription>; 
  healthFacility : HealthFacility
 //  vitals: Vitals; //pills given to the patient [ { id: 1 } ]
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
   *    healthFacility : { 
   *      id: 2,
   *      name: Extension 2 Clinic, 
   *      region :1
   *      speciality :{}
   *      
   *    }
   * 
   * } 
   * 
   */
  constructor(userId: string, vitals: Vitals,healthFacility :HealthFacility, injuryType: string, date_of_injury: Date, doctorsNotes?: string) {

    this.userId = userId;
    this.injuryType = injuryType;
    this.date_of_injury = date_of_injury;
    this.doctorsNotes = doctorsNotes;
    this.vitals = vitals; 
    this.healthFacility = healthFacility;
  }

  addInjuryPills(medicationPrescribed: PillPrescription) {
    this.medicationPrescribed.push(medicationPrescribed);
  }

}
