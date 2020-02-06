import { Region } from '../models/Region';
import { Request, Response } from 'express';

/** get all the regions/distrits */

export async function getAllRegions(request: Request, response: Response) {
    try {
        await Region.getRegions(result => {
            console.log(result);
            response.json(result);
        });
    } catch (error) {
        console.log(error)
    }
}