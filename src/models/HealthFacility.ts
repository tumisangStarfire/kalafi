import { HealthFacilityInterface } from "interfaces/HealthFacilityInterface";
import { ObjectId } from "mongodb";
import Address from "./Address";
import Region from "./Region";

export default class HealthFacility implements HealthFacilityInterface{
     _id: ObjectId;
     name: string;
     region: Region;
     address: Address;
     latitude?: number;
     longitude?: number;
    
    constructor(
         _id : ObjectId, 
         name : string,
        region : Region,
        address : Address,
        latitude? : number,
        longitude? : number){
            this._id = _id;
            this.name = name; 
            this.region = region; 
            this.address = address;
            this.longitude = longitude;
            this.latitude = latitude;
    }
}