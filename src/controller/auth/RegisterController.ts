import { Request, Response } from 'express';
import Service  from '../../service/UserService';
import  User  from '../../models/User';

export async function register(request: Request, response: Response, next) {
    try {

        const newUser: User = request.body;
        
        var createUser = await Service.create(newUser, result => {
            console.log(result);
            return response.json(result).status(200);
        });

    } catch (error) {
        response.json(error);
    }
}     

export   async  function registerBeta(request: Request, response: Response){
    try {
        const newUser: User = request.body;
        var createUser = await Service.registerBetaUser(newUser, result => {
            console.log(result);
            return response.json(result).status(200);
        });
    } catch (error) {
        response.json(error);
    }
}
