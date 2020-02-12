import { Request, Response } from 'express';
import { HealthFacilityHelper } from '../databasehelper/HealthFacilityHelper';

export async function healthFacilityData(request: Request, response: Response) {
    try {
        await HealthFacilityHelper.getHealthFacilities(result => {
            console.log('result', result);
            response.json(result).status(200);
        });

    } catch (error) {
        console.log('request error : ', error);
    }
}