import { databaseConnector } from '../database/databaseConnector';

export interface Vitals {
    id?: number;
    userId: number;
    recorded_on: Date;
    temperature: number;
    bloodPressure: number;
    pulseRate?: number;
}