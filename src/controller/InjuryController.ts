import  Injury  from '../models/Injury';
import { Request, Response } from 'express';
import Service from '../service/InjuryService';

/** create the injury  */
export const store = async(request: Request, response: Response) => {
    try {
        var newInjury: Injury = request.body; /** request body sent from client */
        await Service.create(newInjury, result => {
            console.log(result);
            response.json(result);
        });
    } catch (error) {
        console.log(error);
    }
} 

/**get all injuries */ 

export const  findAll = async (request:Request, response:Response) =>{ 
    try {
        await Service.getAllInjuryData(result =>{  
            console.log(result);
            response.json(result);
        });
    } catch (error) {
        console.log(error);
    }
}


/** remove the injury */
export const destroy = async (request: Request, response: Response) =>  {
    try {
        var injuryId = request.params.id; //send the id as a parameter
        await Service.remove(injuryId, result => {
            console.log(result);
            response.json(result);
        });
    } catch (error) {
        console.log(error);
    }
}