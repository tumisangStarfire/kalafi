import { ObjectId } from "mongodb";

export default class EmergencyContact {
  _id: ObjectId;
  private belongsTo: ObjectId;
  private firstName: string;
  private cellphone?: number;
  private relation?: string;

  
  constructor(
    _id : ObjectId,
    belongsTo: ObjectId, 
    name: string, 
    firstName: string, 
    cellphone: number, 
    relation : string,
    ) {
  
    this._id= _id; 
    this.belongsTo =belongsTo;
    this.firstName = firstName;
    this.cellphone = cellphone;
    this.relation = relation
  }



}
