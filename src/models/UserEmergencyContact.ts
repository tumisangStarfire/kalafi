import { User } from "./User";
import { ObjectId } from "mongodb";


export class UserEmergencyContact extends Document {
  _id: string;
  /**belongs to user */
 
  protected firstName: string;
  private cellphone: number;
  private relation?: string;

    constructor(firstName: string, cellphone: number, relation: string) {
     super();
    
 
   } 



}
