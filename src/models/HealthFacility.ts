import { Region } from '../models/Region'
import { Address } from './Address';
import { Document } from "mongoose";

export interface HealthFacility extends Document {
    _id: String;
    latitude: number;
    longitude: number;
    name: string;
    regionRef: Region;
}