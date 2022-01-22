import { Request, Response } from 'express';
import Service from '../service/HealthFacilityService';

export const findAllHealthFacilities = async(request: Request, response: Response) => {
    try {
        await Service.getHealthFacilities(result => {
            // console.log('result', result);
            response.json(result).status(200);
        });

    } catch (error) {
        return response.json(error);
    }
}
