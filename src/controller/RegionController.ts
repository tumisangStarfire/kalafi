
import { Request, Response } from 'express';
import { RegionHelper } from '../databasehelper/RegionHelper';

/** get all the regions/distrits */

export async function getAllRegions(request: Request, response: Response) {
    try {
        await RegionHelper.getRegions(result => {
            console.log(result);
            response.json(result);
        });
    } catch (error) {
        console.log(error)
    }
}