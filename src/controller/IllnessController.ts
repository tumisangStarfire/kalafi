import { Illness } from '../models/Illness';
import { Request, Response } from 'express';

/** create the illness  */
export async function createIllness(request: Request, response: Response) {
    try {
        var newIllness: Illness = request.body; /** reqeust body sent  */
        await Illness.create(newIllness, result => {
            console.log(result);
            response.json(result);
        });
    } catch (error) {
        console.log(error);
    }
}
/** get users Ilness data */

export async function userIllnessData(request: Request, response: Response) {
    try {
        var userId = request.body.userId;
        await Illness.getUserIllness(userId, result => {
            console.log(result);
            response.json(result);
        });
    } catch (error) {
        console.log(error);
    }
}

/** remove the illness */
export async function deleteIllness(request: Request, response: Response) {
    try {
        var illnessId = request.params.id; //send the id as a parameter
        await Illness.remove(illnessId, result => {
            console.log(result);
            response.json(result);
        });
    } catch (error) {
        console.log(error);
    }
}