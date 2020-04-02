import { UserInjury } from '../models/UserInjury';
import { Request, Response } from 'express';
import { InjuryHelper } from '../databasehelper/InjuryHelper';

/** create the injury  */
export async function createInjury(request: Request, response: Response) {
    try {
        var newInjury: UserInjury = request.body; /** request body sent from client */
        await InjuryHelper.create(newInjury, result => {
            console.log(result);
            response.json(result);
        });
    } catch (error) {
        console.log(error);
    }
} 

/**get all injuries */ 

export async function getAllInjuries(request:Request, response:Response){ 
    try {
        await InjuryHelper.getAllInjuryData(result =>{  
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
        var userId = request.params.userId;
        await InjuryHelper.getUserInjuriesUsingUserId(userId, result => {
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
        await InjuryHelper.remove(injuryId, result => {
            console.log(result);
            response.json(result);
        });
    } catch (error) {
        console.log(error);
    }
}