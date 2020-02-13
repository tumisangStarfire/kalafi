import { Region } from '../models/Region'
import { Address } from './Address';


export interface HealthFacility extends Address {
    id?: number;
    latitude: number;
    longitude: number;
    name: string;
    regionRef: Region;
}