
import { AllergyTypes } from './AllergyType';
import { ObjectId } from "mongodb";

export class UserAllergy {
 
  _id: ObjectId;
  userId: number;
  allergyType: Array<AllergyTypes>;

  constructor(userID: number, allergyType: AllergyTypes) {

    this.userId = userID;
    this.allergyType.push(allergyType);

  }

  get getUserId(): number {
    return this.userId;
  }




}
