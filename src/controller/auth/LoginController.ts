import { Request, Response } from 'express';
import Service  from '../../service/UserService';
import { LoginInterface } from 'interfaces/LoginInterface';
// DB


export async function login(request: Request, response: Response) {
    try {
        //TODO login with cellphone and password  
        const loginCredentials: LoginInterface = request.body;
        await Service.login(loginCredentials, result => {
            console.log(result);
            return response.json(result).status(result.code);
        })

    } catch (error) {
        console.log(error);
    }
}

