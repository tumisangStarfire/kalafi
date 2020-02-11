import { Illness } from '../models/Illness';
import { Request, Response } from 'express';
import { IllnessHelper } from '../databasehelper/IllnessHelper';

/** create the illness  */
export async function createIllness(request: Request, response: Response) {
    try {
        var newIllness: Illness = request.body; /** reqeust body sent  */
        await IllnessHelper.create(newIllness, result => {
            console.log(result);
            response.json(result);
        });
    } catch (error) {
        console.log(error);
    }
}
/** get users Illness data */

export async function userIllnessData(request: Request, response: Response) {
    try {
        var userId = request.params.userId;
        await IllnessHelper.getUserIllnessDataUsingUserId(userId, result => {
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
        await IllnessHelper.remove(illnessId, result => {
            console.log(result);
            response.json(result);
        });
    } catch (error) {
        console.log(error);
    }
}