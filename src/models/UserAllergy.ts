import { Document } from "mongoose";
import { AllergyTypes } from './AllergyType';

export class UserAllergy extends Document {
  _id: string;
  userId: number;
  allergyType: Array<AllergyTypes>;

  constructor(userID: number, allergyType: AllergyTypes) {
    super();
    this.userId = userID;
    this.allergyType.push(allergyType);

  }

  get getUserId(): number {
    return this.userId;
  }




}
