import { User } from "./User";
import { ObjectId } from "mongodb";


export class EmergencyContact {
  _id: ObjectId;
  /**belongs to user */
  protected belongsTo: string;
  protected firstName: string;
  private cellphone: number;
  private relation?: string;

  /*  constructor(belongsTo: string, firstName: string, cellphone: number, relation: string) {
     super(firstName,);
     this.belongsTo = belongsTo;
 
   } */



}
