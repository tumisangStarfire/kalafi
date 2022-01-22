import { IllnessInterface } from 'interfaces/IllnessInterface';
import { ObjectId } from 'mongodb';

enum SEVERITYSCORE {
    "Minor" = 0,
    "Severe" = 1,
    "Major" = 2,
    "Critical" = 3 
};
export default class Illness implements IllnessInterface  {

    _id: ObjectId;
    name: string;
    description: string;
    severityScore : SEVERITYSCORE;
    symptoms :Array<string>;


    constructor(_id : ObjectId, name: string, description : string, severityScore : SEVERITYSCORE, symptoms : Array<string>) {
        this._id = _id, 
        this.name = name;
        this.description = description;
        this.severityScore = severityScore;
        this.symptoms = symptoms;
       
    }

   
}
