
import { Request, Response } from 'express';

//save the OTP code, 

export async function requestOTP(request: Request, response: Response) {
    try {
        let cellphone = request.body.cellphone;
        // const validPhoneNumber = await checkPhoneNumber(request, response);
        // const sendOTP =  thorough email or sms
    } catch (error) {
        throw (error)
    }
}


 //validate otp