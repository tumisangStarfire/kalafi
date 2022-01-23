import { Request, Response } from 'express';
import  Service  from '../service/UserService';


//post function
export async function checkPhoneNumber(request: Request, response: Response) {
    try {
        let cellphone = request.body.cellphone;
          const valid = await Service.verifyUserEmail(cellphone, res => {
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
        const result = await Service.createPassword(userId,password,confirmPassword,res =>{ 
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
        const result = await Service.resetPassword(userId,password,confirmPassword,res =>{ 
            console.log(res); 
            return res;
        })
    } catch (error) {
        console.log(error);
    }
}

//get function
export async function findUser(request: Request, response: Response) {
    try {
        let id = request.params.userId;
        await Service.findUser(id, res => {
            console.log(res);
            response.json(res);
        })

    } catch (error) {
        console.log(error);
    }

} 

