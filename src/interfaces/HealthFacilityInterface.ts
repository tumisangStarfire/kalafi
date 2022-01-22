import { ObjectId } from 'mongodb';
import Region  from '../models/Region'
import Address  from '../models/Address';


export interface HealthFacilityInterface {
     _id: ObjectId;
     name: string;
    region: Region;
    address : Address;
    latitude?: number;
    longitude?: number;
    
}