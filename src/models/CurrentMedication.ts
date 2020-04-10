import { Document } from "mongoose";

export class CurrentMedication extends Document {
  
  _id : string; 
  userId :string; 
  pillName: string;
  datePrescribed: Date; 
  pharmaceutical : string; 
  frequency: number; //frequency (hours between medication)
  dailyDosage: number;


  constructor(userId: string, pillName: string, datePrescribed: Date, dailyDosage: number,frequency : number, storageId? : string) {
    super();
    this._id= storageId; 
    this.userId =userId;
    this.frequency = frequency;
    this.pillName = pillName;
    this.datePrescribed = datePrescribed;
    this.dailyDosage = dailyDosage;

  }
   
   
  get getStorageId() : string { 
    return this._id; 
 } 

 set getStorageId(storageId: string) {
   this._id = storageId;
 } 

 get getUserId (): string{ 
   return this.userId;
 } 

 set setUserId(userId : string){
   this.userId =userId;
 }

 get getPillName(): string{  
   return this.pillName;
 }

 set setPillName(pillName :string){ 
   this.pillName = pillName;
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
  this.frequency =frequency;
}

get getFrequency(): number{ 
  return this.frequency;
}  

set setPharmaceutical( pharmaceutical:string){ 
  this.pharmaceutical= pharmaceutical;
}
 
get getPharmaceutical():string{ 
  return this.pharmaceutical;
}

}
