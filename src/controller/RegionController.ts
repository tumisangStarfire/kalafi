
import { Request, Response } from 'express';
import Service from '../service/RegionService';

/** get all the regions/distrits */

export const findAllRegions =  async (request: Request, response: Response) => {
    try {
        await Service.getRegions(result => {
            console.log(result);
            return response.json(result);
        });
    } catch (error) {
        console.log(error);
    }
}
