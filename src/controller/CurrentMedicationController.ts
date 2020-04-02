import { Request, Response } from 'express';
import { CurrentMedication } from '../models/CurrentMedication';
import { CurrentMedicationHelper } from '../databasehelper/CurrentMedicationHelper';

export async function saveCurrentMedication(request: Request, response: Response) {
    try {

        const newCurrentMedication: CurrentMedication = request.body;

        await CurrentMedicationHelper.create(newCurrentMedication, result => {
            response.json(result);
        });
        // const sendOTP =  thorough email or sms
    } catch (error) {
        throw (error)
    }
}


export async function removeCurrentMedication(request: Request, response: Response) {
    try {

        let CurrentMedicationId = request.params.id;//send the id as a parameter

        await CurrentMedicationHelper.remove(CurrentMedicationId, result => {
            return response.json(result);
        });
        // const sendOTP =  thorough email or sms
    } catch (error) {
        throw (error)
    }
}

export async function getUserMedicationData(request: Request, response: Response) {
    try {
        let userId = request.params.userId;

        await CurrentMedicationHelper.getMedicationDataUsingUserId(userId, result => {
            return response.json(result);
        });

    } catch (error) {
        console.log(error);
    }

}
