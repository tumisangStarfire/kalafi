import { Request, Response } from 'express';
import Service from '../service/PatientRecordService';

export async function findUserInjuries(request: Request, response: Response) {
    try {
        let id = request.params.userId;
        await Service.getUserInjuriesUsingUserId(id, res => {
            console.log(res);
            //const user: User = res;
            response.json(res);
        })

    } catch (error) {
        console.log(error);
    }

} 

export const findUserIllnesses = async (request: Request, response: Response) => {
    try {
        let id = request.params.userId;
        await Service.getUserIllnessUsingUserId(id, res => {
            console.log(res);
            //const user: User = res;
            response.json(res);
        })

    } catch (error) {
        console.log(error);
    }

}