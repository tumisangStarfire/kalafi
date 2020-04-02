import { Region } from "./Region"; 
import { Document } from "mongoose";
export class Address extends Document{

   _id : string; 
  private userId : string;
  private city?: string;
  private town?: string;
  private village?: string;
  private streetName?: string;
  private houseNumber?: string; 
  private ward?:string;
  private region: Region;

  constructor(userId :string,region: Region,storageId?:string, city?: string, town?: string, village?: string, streetName?: string, houseNumber?: string,ward?:string) {
    super();
    this._id= storageId; 
    this.userId =userId;
    this.city = city;
    this.town = town;
    this.village = village;
    this.streetName = streetName;
    this.houseNumber = houseNumber; 
    this.ward =ward
    this.region = region;

  } 

  
  get getStorageId() : string { 
     return this._id; 
  } 

  set getStorageId(storageId: string) {
    this._id = storageId;
  } 

  get getUserId (): string{ 
    return this.userId;
  } 

  set setUserId(userId : string){
    this.userId =userId;
  }

  get getCity(): string {

    return this.city;
  }

  set setCity(city: string) {
    this.city = city;
  }

  get getTown(): string {
    return this.town;
  }

  set setTown(town: string) {
    this.town = town;
  }

  get getVillage(): string {
    return this.village;
  }

  set setVillage(village: string) {
    this.village = village;
  }


  get getStreetName(): string {
    return this.streetName;
  }

  set setStreetName(streetName: string) {
    this.streetName = streetName;
  }

  get getHouseNumber(): string {
    return this.houseNumber;
  }

  set setHouseNumber(houseNumber: string) {
    this.houseNumber = houseNumber;
  } 

  get getWard():string{ 
    return this.ward;
  } 

  set setWard(ward: string ){ 
    this.ward =ward;
  }

}
