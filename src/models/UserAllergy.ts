import { databaseConnector } from '../database/databaseConnector';
import { AllergyTypes } from './AllergyType';

export class UserAllergy {
  id?: number;
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
