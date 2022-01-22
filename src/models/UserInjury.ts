
import  PillPrescription  from './PillPrescription';
import { VitalsInterface } from '../interfaces/VitalsInterface';
import { ObjectId } from 'mongodb' ; 
import HealthFacility from './HealthFacility';
import Injury from './Injury';


export default class UserInjury implements VitalsInterface{

  _id: ObjectId;
  userId: ObjectId;
  dateOfInjury: Date;
  medicationPrescribed: Array<PillPrescription>; 
  healthFacility : HealthFacility;
  injury: Injury;
  doctorsNotes?: string;

  constructor
  (  
    _id : ObjectId,
    userId: ObjectId,
    bloodPressure:number,
    temperature:number,
    injury:Injury,
    healthFacility :HealthFacility, 
    medicationPrescribed:PillPrescription,
    dateOfInjury: Date, 
    doctorsNotes?: string,
    pulseRate?:number,
    recordedOn?:Date
    ) {  

    this._id=_id;
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
  recordedOn: Date;
  temperature: number;
  bloodPressure: number;
  pulseRate?: number;

  get getId(): ObjectId {
    return this._id;
  }
    
  set setId(_id: ObjectId) {
    this._id = _id;
   }

  get getUserId(): ObjectId {
    return this.userId;
   }
    
  set setUserId(userId: ObjectId) {
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

  get getInjury():Injury{ 
    return this.injury;
  } 

  set setInjury(injury: Injury){ 
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
  



}
