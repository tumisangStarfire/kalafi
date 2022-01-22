import { InjuryInterface } from 'interfaces/InjuryInterface';
import { ObjectId } from 'mongodb';


export default class Injury implements InjuryInterface{

    _id: ObjectId;
    name: string;
    description: string;
    injurySeverityScore : string;

    constructor(_id : ObjectId, name: string, description : string, injurySeverityScore : string ) {
         this._id = _id, 
        this.name = name;
        this.description = description;
        this.injurySeverityScore = injurySeverityScore;
       
    }
    

}
