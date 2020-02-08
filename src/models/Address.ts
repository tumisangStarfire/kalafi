import { Region } from "./Region";
import { databaseConnector } from '../database/databaseConnector';

export class Address {
  city?: string;
  private town?: string;
  private village?: string;
  private streetName?: string;
  private houseNumber?: string;
  private region: Region;

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
    return this, this.houseNumber;
  }

  set setHouseNumber(houseNumber: string) {
    this.houseNumber = houseNumber;
  }




}
