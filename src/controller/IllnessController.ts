import UserIllness  from '../models/UserIllness';
import { Request, Response } from 'express';
import Service  from '../service/IllnessService';


/** create the illness  */
export const store = async (request: Request, response: Response) =>  {
    try {
        var newIllness: UserIllness = request.body; /** reqeust body sent  */
        await Service.create(newIllness, result => {
            console.log(result);
            response.json(result);
        });
    } catch (error) {
        console.log(error);
    }
}
/** get users Illness data */

export const findOne = async (request: Request, response: Response) => {
    try {
        var userId = request.params.userId;
        await Service.getIllnessById(userId, result => {
            console.log(result);
            response.json(result);
        });
    } catch (error) {
        console.log(error);
    }
}

/** remove the illness */
export const  destroy = async (request: Request, response: Response) =>  {
    try {
        var illnessId = request.params.id; //send the id as a parameter
        await Service.remove(illnessId, result => {
            console.log(result);
            response.json(result);
        });
    } catch (error) {
        console.log(error);
    }
}

export const findAll = ( request: Request, response: Response) => {
    try {
        var result = Service.illnessApi(res => {
            let data = res.data;
            var cleanUp = JSON.stringify(data);
            cleanUp.replace('\n\t', '');

            return response.json(data.diseases)
        });
    } catch (error) {
        console.log(error);
    }
}