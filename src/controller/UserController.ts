import { Request, Response } from 'express';
import { User } from '../models/User';
import { UserHelper } from '../databasehelper/UserHelper';


//post function
export async function checkPhoneNumber(request: Request, response: Response) {
    try {
        let cellphone = request.body.cellphone;
          const valid = await UserHelper.verifyUserCellphone(cellphone, res => {
             console.log(res);
             return res;
         });
    } catch (error) {
        console.log(error);
    }

} 

//post function
export async function createUserPassword(request: Request, response: Response) {  

    try {  
        let userId = request.body.userId;
        let password =request.body.password;
        let confirmPassword = request.body.confirmPassword; 
        const result = await UserHelper.createPassword(userId,password,confirmPassword,res =>{ 
            console.log(res); 
            return res;
        });
        
    } catch (error) {
        console.log(error);
    }

} 

export async function resetPassword(request: Request, response: Response){ 
    try {
        let userId = request.body.userId;
        let password =request.body.password;
        let confirmPassword = request.body.confirmPassword; 
        const result = await UserHelper.resetPassword(userId,password,confirmPassword,res =>{ 
            console.log(res); 
            return res;
        })
    } catch (error) {
        console.log(error);
    }
}

//get function
export async function getUser(request: Request, response: Response) {
    try {
        let id = request.params.userId;
        await UserHelper.getUserById(id, res => {
            console.log(res);
            //const user: User = res;
            response.json(res);
        })

    } catch (error) {
        console.log(error);
    }

}