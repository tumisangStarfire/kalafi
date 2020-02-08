import { UserAllergy } from '../models/UserAllergy';
import { Request, Response } from 'express';
import { UserAllergyLogic } from 'businesslogic/UserAllergyLogic';

/** create the allergey post */
export async function createAllergy(request: Request, response: Response) {
    try {
        var newUserAllergy: UserAllergy = request.body; /** request body sent from client */
        await UserAllergyLogic.create(newUserAllergy, result => {
            console.log(result);
            response.json(result);
        });
    } catch (error) {
        console.log(error);
    }
}

/** remove the users allergy */

export async function removeAllergy(request: Request, response: Response) {
    try {
        var allergyId = request.params.id; //send the id as a parameter
        await UserAllergyLogic.remove(allergyId, result => {
            console.log(result);
            response.json(result);
        });
    } catch (error) {
        console.log(error);
    }
}