import { PillPrescription } from "./PillPrescription";
import { VitalsInterface } from "../interfaces/VitalsInterface";
import mongoose, { Model, Schema, Document } from 'mongoose';
import { HealthFacility } from "./HealthFacility";
import { IllnessInterface } from "../interfaces/IllnessInterface";

/**Illness has vitals */
export class UserIllness extends Document implements VitalsInterface {

    _id: string;
    userId: string;
    illness: IllnessInterface;
    dateOfDiagnosis: Date;
    doctorsNotes?: string;
    medicationPrescribed: Array<PillPrescription>;
    healthFacility: HealthFacility  

    //vitals information
    recordedOn: Date;
    temperature: number;
    bloodPressure: number;
    pulseRate?: number;

    /** when you create the illness add vitals information to create a complete document
   * 
   * { 
   *    objectID(23232ewwewwee), 
   *    userID : 212121212 
   *    type_of_illness : Stomach
   *    date of injury : 2013-04-23,
   *    pillPrescription : { _id : objectId, name : paracetamol }, 
   *    vitals: { temp: 39, bp: 85  }
   *    doctorsNotes :  
   *    healthFacility : { 
   *        id :1,
   *        name: Extension 2 Clinic, 
   *        region :1
   *        speciality :{}
   *    
   *    }
   *  
   * } 
   * 
   */

    constructor( 
        userId: string,  
        bloodPressure:number,
        temperature:number,
        illness: IllnessInterface, 
        dateOfDiagnosis: Date,
        medicationPrescribed:PillPrescription,
        healthFacility: HealthFacility,
        doctorsNotes?: string,
        storageId?:string,
        pulseRate?:number,
        recordedOn?:Date
        ) {
        super(); 
        this._id = storageId;
        this.userId = userId; 
        this.bloodPressure =bloodPressure; 
        this.temperature =temperature;
        this.illness = illness;
        this.dateOfDiagnosis = dateOfDiagnosis; 
        this.pulseRate =pulseRate; 
        this.recordedOn =recordedOn;  
        this.doctorsNotes = doctorsNotes;
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

    get getIllness():IllnessInterface{ 
      return this.illness;
    } 

    set setIllness(illness: IllnessInterface){ 
      this.illness= illness;
    }  

    get getPulserate():number{ 
      return this.pulseRate;
    } 

    set setPulseRate(pulseRate:number){ 
      this.pulseRate= pulseRate;
    } 

    get getDateofDiagnosis():Date{ 
      return this.dateOfDiagnosis;
    } 

    set setDateofDiagnosis(dateOfDiagnosis:Date){ 
      this.dateOfDiagnosis= dateOfDiagnosis;
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

    addIllnessPills(medicationPrescribed: PillPrescription) {
        this.medicationPrescribed.push(medicationPrescribed);
      } 
    
      removePillPrescription(medicationPrescribed:PillPrescription){ 
        //this.medicationPrescribed.
      } 
    
      getPillPrescriptions():Array<PillPrescription>{
        return this.medicationPrescribed;
      }  

}