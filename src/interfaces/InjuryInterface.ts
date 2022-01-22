import { ObjectId } from 'mongodb';

export interface InjuryInterface{  
    _id : ObjectId;
    name: string; 
    injurySeverityScore: string;
}   