import { Request, Response } from 'express';
import { Address } from '../models/Address';
import { AddressHelper } from 'databasehelper/AddressHelper';

export async function updateAddress(request: Request, response: Response) {

    try {
        let addresId = request.body.id;
        var address: Address = request.body;
        await AddressHelper.update(address, addresId, result => {
            console.log(result);
            response.json(result).status(200);

        });
    } catch (error) {
        console.log('request error:', error)
    }

}

