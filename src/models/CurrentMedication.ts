import { ObjectId, Timestamp } from "mongodb";
import Pharmacy from "./pharmacy";

export default class CurrentMedication {
  
  _id : ObjectId; 
  userId :ObjectId; 
  name: string;
  datePrescribed: Date; 
  frequency: number; //frequency (hours between medication)
  dailyDosage: number;
  pharmacy : Pharmacy; 
  created_at : Date;
  updated_at : Date; 
  
  constructor(
    _id : ObjectId,
    userId: ObjectId, 
    name: string, 
    datePrescribed: Date, 
    dailyDosage: number, 
    frequency : number,
    pharmacy : Pharmacy
    ) {
  
    this._id= _id; 
    this.userId =userId;
    this.frequency = frequency;
    this.name = name;
    this.datePrescribed = datePrescribed;
    this.dailyDosage = dailyDosage;
    this.pharmacy = pharmacy
  }
   
   
  get getId() : ObjectId { 
    return this._id; 
  } 

  set getId(_id: ObjectId) {
    this._id = _id;
  } 

  get getUserId (): ObjectId{ 
    return this.userId;
  } 

  set setUserId(userId : ObjectId){
    this.userId =userId;
  }

  get getName(): string{  
    return this.name;
  }

  set setName(name :string){ 
    this.name = name;
  }

  get getDatePrescribed():Date{  
      return  this.datePrescribed;   
  }
  
  set setDatePrescribed(datePrescribed : Date){ 
    this.datePrescribed =datePrescribed;
  }

  get getDailyDosage(): number{ 
    return this.dailyDosage;
  } 

  set setFrequency(frequency : number){ 
    this.frequency = frequency;
  }

  get getFrequency(): number{ 
    return this.frequency;
  }  

  set setPharmacy( pharmacy : Pharmacy){ 
    this.pharmacy = pharmacy;
  }
  
  get getPharmacy () : Pharmacy { 
    return this.pharmacy;
  }

}
