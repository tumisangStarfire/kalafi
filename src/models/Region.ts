import { Document } from "mongoose"; 

export class Region extends Document {
  _id: string; 
   regionId :number;
  regionName: string;  

  constructor(regionId:number, regionName,storageId:string){ 
    super(); 
    this._id=storageId; 
    this.regionId = regionId; 
    this.regionName = regionName;
  } 

  get getStorageId() : string { 
    return this._id; 
 } 

  set getStorageId(storageId: string) {
    this._id = storageId;
  }  

  get getRegionId() : number { 
    return this.regionId; 
  } 

  set setRegionId(regionId: number) {
  this.regionId = regionId;
  }  

  get getRegionName():string{ 
    return this.regionName;
  }  

  set setRegionName(regionName : string){ 
    this.regionName =regionName;
  }


}
