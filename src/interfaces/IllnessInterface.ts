import { ObjectId } from 'mongodb';

export interface IllnessInterface{ 
    _id:ObjectId; 
    name:string; 
    dataUpdatedAt?: string; 
    facts?: Array<String>; 
    symptoms? : Array<String>; 
    transmission?:null; 
    diagnosis?:null;
    treatment?:null; 
    prevention?:null;
    more?:null; 
    isActive?:boolean;
}