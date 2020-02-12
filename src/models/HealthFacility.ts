import { Region } from '../models/Region'
import { Document } from 'mongoose';

export interface HealthFacility extends Document {
    id?: number;
    latitude: number;
    longitude: number;
    name: string;
    regionRef: Region;
}