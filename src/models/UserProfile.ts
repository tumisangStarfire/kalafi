import { Document } from "mongoose";
import { ObjectId } from "mongodb";

const AWS = require('aws-sdk');
const fs = require('fs');
const uuid = require('uuid');



enum Gender {
  Male = 1,
  Female = 0,
  other=2
}
/**class for the users profile information */
export class UserProfile  extends Document {

  _id: string;
  userId: string;
  /** private modeifies allows us to use access modifiers get and set, strong coding practices. Consistency, Readbility */
  private dob: Date;
  private gender?: Gender;
  private omang?: number;
  private profilePicture?: string;
  private weight: number;
  private height: number;
  private bmi?: number;
  private bloodType?: string;
  private waistSize: number;

  /** User Profile Document Structure 
   *  _id = ObjectId(121221qwqwqw) 
   * date_of_birth : 1990-05-12, [required]
   * gender : 1  
   * omang : xxxxxxxxx 
   * profile_picture: link to s3 
   * weight : 75 [required], 
   * height :  176, 
   * 
   * 
   */
  constructor( 
    userId: string,
    dob: Date,
    weight: number,
    height: number, 
    gender?: Gender,
    omang?: number, 
    profilePicture?: string,
    bmi?: number,
    bloodType?: string, 
    storageId?:string,
    waistSize?: number,
      ) {
    super();
    this._id=storageId;
    this.userId=userId;
    this.dob = dob;
    this.gender = gender;
    this.omang = omang;
    this.profilePicture = profilePicture;
    this.weight = weight;
    this.height = height;
    this.bmi = bmi;
    this.bloodType = bloodType;
    this.waistSize = waistSize;

  }
  
  get getStorageId(): string {
    return this._id;
  }
    
  set setStorageId(storageId: string) {
    this._id = storageId;
   }

  get getUserId(): string {
    return this.userId;
   }
    
  set setUserId(userId: string) {
    this.userId = userId;
  } 

  set setDateofBirth(dob: Date) {
    this.dob = dob;
  }

  get getDateofBirth(): Date {
    return this.dob;

  }

  set setGender(gender: Gender) {
    this.gender = gender;
  }

  get getGender(): Gender {
    return this.gender;
  }

  set setOmang(omang: number) {
    this.omang = omang;
  }

  get getOmang(): number {
    return this.omang;
  }

  set setProfilePicture(profilePicture: string) {
    this.profilePicture = profilePicture;
  }

  get getProfilePicture(): string {
    return this.profilePicture;
  }

  set setWeight(weight: number) {
    this.weight = weight;
  }

  get getWeight(): number {
    return this.weight;
  }

  set setHeight(height: number) {
    this.height = height;
  }

  get getHeight(): number {
    return this.height;
  }

  set setBMI(bmi: number) {
    this.bmi = bmi;
  }

  get getBMI(): number {
    return this.bmi;
  } 

  set  SetBloodType(bloodType:string){
    this.bloodType=bloodType;
  } 

  get getBloodType():string{
    return  this.bloodType;
  } 
  set  setWaistSize(waistSize:number){
    this.waistSize=waistSize;
  } 

  get setWaistSize():number{
    return  this.waistSize;
  }
  

  /**calculate the age of the user */
  public calculateAge(date_of_birth: Date): number {
    var todaysDate = new Date();
    const birthDate = new Date(date_of_birth);
    let age = todaysDate.getFullYear() - birthDate.getFullYear();
    var month = todaysDate.getMonth() - birthDate.getMonth();
    return age;
  }

  /**calculate the Body mass index */
  public calculateBMI(weight: number, height: number) {
    return this.bmi = weight / (height * height);
  }


  /**produce the health risk associated with the bmi number */
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
