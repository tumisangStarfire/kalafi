import { Request, Response } from 'express';

// DB
import { databaseConnector } from '../database/databaseConnector';
import { User, } from '../models/User';
import { UserProfile } from '../models/UserProfile';


export async function checkPhoneNumber(request: Request, response: Response) {
    try {
        let cellphone = request.body.cellphone
        const valid = await User.validateUserPhoneNumber(cellphone, res => {
            console.log(res);
            return res;
        })

    } catch (error) {
        console.log(error);
    }

}