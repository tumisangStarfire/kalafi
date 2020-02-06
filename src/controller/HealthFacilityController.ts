import { Request, Response } from 'express';
import { HealthFacility } from '../models/HealthFacility';

export async function healthFacilityData(request: Request, response: Response) {
    try {
        await HealthFacility.getData(result => {
            console.log('result', result);
            response.json(result).status(200);
        });

    } catch (error) {
        console.log('request error : ', error);
    }
}