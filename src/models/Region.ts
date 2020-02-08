import { databaseConnector } from '../database/databaseConnector';

export class Region {
  private id?: number;
  private regionName: string;

  set setRegionName(regionName: string) {
    this.regionName = regionName;
  }

  get getRegionName(): string {
    return this.regionName;
  }

  constructor(regionName: string) {
    this.regionName = regionName;
  }

}
