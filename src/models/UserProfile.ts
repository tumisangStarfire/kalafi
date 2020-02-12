import { Document } from "mongoose";

const AWS = require('aws-sdk');
const fs = require('fs');
const uuid = require('uuid');



enum Gender {
  Male = 1,
  Female = 0
}
/**class for the users profile information */
export class UserProfile extends Document {

  _id: string;
  userId: number;
  date_of_birth: Date;
  gender?: Gender;
  omang?: number;
  profilePicture?: string;
  weight: number;
  height: number;
  bmi?: number;
  bloodType?: string;


  constructor(userId: number, date_of_birth: Date, weight: number, height: number, gender?: Gender, omang?: number, profilePicture?: string, bmi?: number, bloodType?: string) {
    super();
    this.userId = userId;
    this.date_of_birth = date_of_birth;
    this.gender = gender;
    this.omang = omang;
    this.profilePicture = profilePicture;
    this.weight = weight;
    this.height = height;
    this.bmi = bmi;
    this.bloodType = bloodType;

  }

  get getUserId(): number {
    return this.userId;
  }

  get getDateofBirth(): Date {
    return this.date_of_birth;
  }

  set setDateofBirth(date_of_birth: Date) {
    this.date_of_birth = date_of_birth;
  }

  public calculateBMI(weight: number, height: number) {
    return this.bmi = weight / (height * height);
  }

  set setBMI(bmi: number) {
    this.bmi = bmi;
  }

  public calculateAge(date_of_birth: Date): number {
    var todaysDate = new Date();
    const birthDate = new Date(date_of_birth);
    let age = todaysDate.getFullYear() - birthDate.getFullYear();
    var month = todaysDate.getMonth() - birthDate.getMonth();
    return age;
  }


  getHealthRisk(bmi: number): string {
    if (bmi < 15) {

      console.log("You are in 'Very severely underweight' Category");
      return 'Severely Underweight';
    } else if (bmi >= 15 && bmi < 16) {
      console.log("You are in 'Severely underweight' Category");
      return 'Slightly Underweight';
    } else if (bmi >= 16 && bmi < 18.5) {
      console.log("You are in 'Underweight' Category");
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      console.log("You are in 'Normal (healthy weight)' Category");
      return 'Normal Weight';
    } else if (bmi >= 25 && bmi < 30) {
      console.log("You are in 'Overweight' Category");
      return 'Overweight';
    } else if (bmi >= 30 && bmi < 35) {
      console.log("You are in 'Moderately obese' Category");
      return 'Moderately Obese';
    } else if (bmi >= 35 && bmi < 40) {
      console.log("You are in 'Severely obese' Category");
      return 'Severely Obese';
    } else if (bmi > 40) {
      console.log("You are in 'Very severely obese' Category");
      return 'Extremely Obese';
    }
  }





}
