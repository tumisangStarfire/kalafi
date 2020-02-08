import { Request, Response } from 'express';
import { UserLogic } from '../../businesslogic/UserLogic';
import { User } from '../../models/User';


export async function registerUser(request: Request, response: Response, next) {
    try {
        const newUser: User = request.body;
        /** pass the data to the  model to do the saving, allows us to carry other functions afterwars such as sending a verification code. */
        await UserLogic.create(newUser, result => {
            console.log(result);
            /**if result is equeal to success, send the otp verification code */
            response.json(result).status(200);
        });

    } catch (error) {
        console.log(error);
    }
}
