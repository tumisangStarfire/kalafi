import { Document } from "mongoose"; 

export class VaccineType extends Document {
    _id: string; 
    id: string; 
    typeofVaccine: string;
    description: string; 

    constructor( 
         
        id: string, 
        typeofVaccine: string, 
        decription: string, 
        storageId : string
    ){ 
        super(); 
        this._id = storageId; 
        this.id= id; 
        this.typeofVaccine =typeofVaccine; 
        this.description = this.description;
    } 

    get getStorageId() : string { 
        return this._id; 
     } 
   
     set getStorageId(storageId: string) {
       this._id = storageId;
     }  

     
    
    

}