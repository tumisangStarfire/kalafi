
import { PillPrescription } from './PillPrescription';
import { VitalsInterface } from '../interfaces/VitalsInterface';
import { ObjectId } from 'mongodb' ; 
import mongoose, { Model, Schema, Document } from 'mongoose';
import { HealthFacility } from './HealthFacility';
import { InjuryInterface } from '../interfaces/InjuryInterface';

export class UserInjury extends Document implements VitalsInterface{

  _id: string;
  userId: string;
  dateOfInjury: Date;
  medicationPrescribed: Array<PillPrescription>; 
  healthFacility : HealthFacility;
  injury:InjuryInterface;
 // vitals: Vitals; //pills given to the patient [ { id: 1 } ]
  doctorsNotes?: string;
  recordedOn: Date;
  temperature: number;
  bloodPressure: number;
  pulseRate?: number;
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
  constructor
  ( 
    userId: string,
    bloodPressure:number,
    temperature:number,
    injury:InjuryInterface,
    healthFacility :HealthFacility, 
    medicationPrescribed:PillPrescription,
    dateOfInjury: Date, 
    doctorsNotes?: string,
    storageId?:string,
    pulseRate?:number,
    recordedOn?:Date
    ) {  

    super();
    this._id=storageId;
    this.userId = userId;
    this.dateOfInjury = dateOfInjury;
    this.bloodPressure=bloodPressure;
    this.temperature=temperature;
    this.injury=injury;
    this.pulseRate=pulseRate;
    this.doctorsNotes = doctorsNotes;
    this.recordedOn= recordedOn;
    this.medicationPrescribed.push(medicationPrescribed);
    this.healthFacility = healthFacility;
  } 

  get getStorageId(): string {
    return this._id;
  }
    
  set setStorageId(storageId: string) {
    this._id = storageId;
   }

  get getUserId(): string {
    return this.userId;
   }
    
  set setUserId(userId: string) {
    this.userId = userId;
  }  
  
  get getBloodPressure():number{ 
    return this.bloodPressure;
  } 

  set setBloodPressure(bloodPressure: number){ 
    this.bloodPressure= bloodPressure;
  }  

  get getTemperature():number{ 
    return this.temperature;
  } 

  set setTemperature(temperature: number){ 
    this.temperature= temperature;
  }  

  get getInjury():InjuryInterface{ 
    return this.injury;
  } 

  set setInjury(injury: InjuryInterface){ 
    this.injury= injury;
  }  

  get getPulserate():number{ 
    return this.pulseRate;
  } 

  set setPulseRate(pulseRate:number){ 
    this.pulseRate= pulseRate;
  } 

  get getDateofInjury():Date{ 
    return this.dateOfInjury;
  } 

  set setDateofInjury(dateOfInjury:Date){ 
    this.dateOfInjury= dateOfInjury;
  } 

  get getRecordedOn():Date{ 
    return this.recordedOn;
  } 

  set setRecordedOn(recordedOn:Date){ 
    this.recordedOn= recordedOn;
  }

  get getDoctorsNotes():string{ 
    return this.doctorsNotes;
  } 

  set setDoctorsNotes(doctorsNotes: string){ 
    this.doctorsNotes = doctorsNotes;
  }

  get getHealthFacility():HealthFacility{
    return this.healthFacility;
  } 

  set setHealthFacility(healthFacility: HealthFacility){ 
    this.healthFacility =healthFacility;
  }
  

  addInjuryPills(medicationPrescribed: PillPrescription) {
    this.medicationPrescribed.push(medicationPrescribed);
  } 

  removePillPrescription(medicationPrescribed:PillPrescription){ 
    //this.medicationPrescribed.
  } 

  getPillPrescriptions():Array<PillPrescription>{
    return this.medicationPrescribed;
  } 

}
