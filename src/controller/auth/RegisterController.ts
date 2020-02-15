import { Request, Response } from 'express';
import { UserHelper } from '../../databasehelper/UserHelper';
import { User } from '../../models/User';

export async function registerUser(request: Request, response: Response, next) {
    try {

        const newUser: User = request.body;
        var createUser = await UserHelper.create(newUser, result => {
            console.log(result);
            return response.json(result).status(200);
        });

    } catch (error) {
        response.json(error);
    }
}
