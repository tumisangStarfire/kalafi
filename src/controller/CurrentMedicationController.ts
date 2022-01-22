import { Request, Response } from 'express';
import Service from '../service/CurrentMedicationService';
import  CurrentMedication  from '../models/CurrentMedication';

export async function storeCurrentMedication(request: Request, response: Response) {
    try {

        const newCurrentMedication: CurrentMedication = request.body;

        await Service.store(newCurrentMedication, result => {
            response.json(result);
        });
        // const sendOTP =  thorough email or sms
    } catch (error) {
        throw (error)
    }
}


export async function destroyMedication(request: Request, response: Response) {
    try {

        let CurrentMedicationId = request.params.id;//send the id as a parameter

        await Service.destroy(CurrentMedicationId, result => {
            return response.json(result);
        });
        // const sendOTP =  thorough email or sms
    } catch (error) {
        throw (error)
    }
}

export async function findUserMedication(request: Request, response: Response) {
    try {
        let userId = request.params.userId;

        await Service.getMedicationUsingUserId(userId, result => {
            return response.json(result);
        });

    } catch (error) {
        console.log(error);
    }

}
