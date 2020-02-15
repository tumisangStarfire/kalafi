import { Address } from 'models/Address';
import { MongoHelper } from '../database/MongoHelper';
var ObjectId = require('mongodb').ObjectID;

export class AddressHelper {

    static create = async (address: Address, callback) => {
        try {
            const query = await MongoHelper.client.db('Mooki_Development').collection('address');
            var result = await query.insertOne(address, function (err, data) {
                if (err) {
                    console.log(err);
                }
                console.log(data)
                return callback(data.insertedId);
            });

        } catch (error) {
            console.log(error);
        }
    }

    static update = async (address: Address, addressId, callback) => {
        try {
            const query = await MongoHelper.client.db('Mooki_Development').collection('address');
            var result = query.updateOne({ _id: new ObjectId(addressId) }, { address }, function (err, res) {
                if (err) {
                    console.log(err);
                }
                console.log(res)
                return callback(res.upsertedCount);
            });

        } catch (error) {
            console.log(error);

        }
    } 

    

}