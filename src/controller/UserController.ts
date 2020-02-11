import { Request, Response } from 'express';
import { User } from '../models/User';
import { UserHelper } from '../databasehelper/UserHelper';



export async function checkPhoneNumber(request: Request, response: Response) {
    try {
        let cellphone = request.body.cellphone
        /*  const valid = await User.validateUserPhoneNumber(cellphone, res => {
             console.log(res);
             return res;
         }) */

    } catch (error) {
        console.log(error);
    }

}

export async function getUser(request: Request, response: Response) {
    try {
        let id = request.body.id
        await UserHelper.getUserById(id, res => {
            console.log(res);
            const user: User = res;
            response.json(user);
        })

    } catch (error) {
        console.log(error);
    }

}