import { UserIllness } from '../models/UserIllness';
import { Request, Response } from 'express';
import { IllnessHelper } from '../databasehelper/IllnessHelper';


/** create the illness  */
export async function createIllness(request: Request, response: Response) {
    try {
        var newIllness: UserIllness = request.body; /** reqeust body sent  */
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

export function getAPIIllness(request: Request, response: Response) {
    try {
        var result = IllnessHelper.illnessApi(res => {
            var strings = ["transmission", "diagnosis", "treatment", "prevention"]
            let data = res.data;
            var cleanUp = JSON.stringify(data);
            cleanUp.replace('\n\t', '');

            return response.json(data.diseases)
        });
    } catch (error) {
        console.log(error);
    }
}