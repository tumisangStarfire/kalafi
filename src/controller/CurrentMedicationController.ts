import { Request, Response } from 'express';
import { CurrentMedication } from '../models/CurrentMedication';

export async function saveCurrentMedication(request: Request, response: Response) {
    try {

        const newCurrentMedication: CurrentMedication = request.body;

        await CurrentMedication.create(newCurrentMedication, result => {
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

        await CurrentMedication.remove(CurrentMedicationId, result => {
            response.json(result);
        });
        // const sendOTP =  thorough email or sms
    } catch (error) {
        throw (error)
    }
}
