
import { Request, Response } from 'express';
import { RegionHelper } from '../databasehelper/RegionHelper';

/** get all the regions/distrits */

export async function getAllRegions(request: Request, response: Response) {
    try {
        await RegionHelper.getRegions(result => {
            console.log(result);
            return response.json(result);
        });
    } catch (error) {
        console.log(error);
    }
}

export async function uploadRegionData(request: Request, response: Response) {
    try {
        await RegionHelper.uploadRegionData(result => {
            console.log(result);
            return response.json(result).status(200);
        })
    } catch (error) {
        console.log(error);
    }
}