
import { Request, Response } from 'express';
import { RegionLogic } from 'businesslogic/RegionLogic';

/** get all the regions/distrits */

export async function getAllRegions(request: Request, response: Response) {
    try {
        await RegionLogic.getRegions(result => {
            console.log(result);
            response.json(result);
        });
    } catch (error) {
        console.log(error)
    }
}