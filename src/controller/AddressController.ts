import { Request, Response } from 'express';
import { Address } from '../models/Address';
import { AddressHelper } from '../databasehelper/AddressHelper';

//post
export async function updateAddress(request: Request, response: Response) {

    try {
        let storageId = request.body.storageId;
        var address: Address = request.body;
        await AddressHelper.update(address, storageId, result => {
            console.log(result);
            response.json(result).status(200);

        });
    } catch (error) {
        console.log('request error:', error)
    }

}  

//post
export async function createAddress(request: Request, response: Response){ 
    try {
        const address : Address = request.body; 
        var result = await AddressHelper.create(address,res =>{ 
            return res;
        })
    } catch (error) {
        console.log(error)
    }
}

//get 
export async function getUserAddress(request: Request, response: Response){ 
    try {
        let userId = request.params.userId; 
        var result = await AddressHelper.getUserAddress(userId, res=>{ 
            return res;
        })
    } catch (error) {
        console.log(error)
    }
}


