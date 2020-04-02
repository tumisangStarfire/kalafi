import { Document } from "mongoose"; 
import { VaccineType } from "./VaccineType";

export class Vaccine extends Document{  

    _id:string;
    id:string;
    name:string;
    vaccineType:VaccineType;

    constructor(vaccineType:VaccineType,name:string,id?:string,storageId?:string){
        super(); 
        this._id=storageId;
        this.id=id;
        this.name=name;
        this.vaccineType=vaccineType;

    }

}