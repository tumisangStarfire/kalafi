import { Injury } from '../models/Injury';
import { Request, Response } from 'express';

/** create the injury  */
export async function createInjury(request: Request, response: Response) {
    try {
        var newInjury: Injury = request.body; /** request body sent from client */
        await Injury.create(newInjury, result => {
            console.log(result);
            response.json(result);
        });
    } catch (error) {
        console.log(error);
    }
}
/** get users Injury data */

export async function userInjuryData(request: Request, response: Response) {
    try {
        var userId = request.body.userId;
        await Injury.getUserInjuries(userId, result => {
            console.log(result);
            response.json(result);
        });
    } catch (error) {
        console.log(error);
    }
}

/** remove the injury */
export async function deleteInjury(request: Request, response: Response) {
    try {
        var injuryId = request.params.id; //send the id as a parameter
        await Injury.remove(injuryId, result => {
            console.log(result);
            response.json(result);
        });
    } catch (error) {
        console.log(error);
    }
}