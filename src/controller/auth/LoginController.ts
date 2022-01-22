import { Request, Response } from 'express';
import Service  from '../../service/UserService';
import { LoginInterface } from 'interfaces/LoginInterface';
// DB


export async function login(request: Request, response: Response) {
    try {
        //TODO login with cellphone and password  
        const email : string = request.body.email;
        const password : string = request.body.password;
        await Service.login(email,password, result => {
            console.log(result);
            return response.json(result).status(result.code);
        })

    } catch (error) {
        console.log(error);
    }
}

