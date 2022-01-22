
import { AllergyTypes } from '../interfaces/AllergyType';
import { ObjectId } from "mongodb";

export class UserAllergy {
 
  _id: ObjectId;
  userId: string;
  allergyType: Array<AllergyTypes>;

  constructor(userID: string, allergyType: AllergyTypes) {

    this.userId = userID;
    this.allergyType.push(allergyType);

  }

  get getUserId(): string {
    return this.userId;
  }




}
