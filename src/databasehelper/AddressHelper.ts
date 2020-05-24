import { Address } from 'models/Address';
import { MongoHelper } from '../database/MongoHelper';
import { JsonResponseInterface } from '../interfaces/JsonResponseInterface';
var ObjectId = require('mongodb').ObjectID;

export class AddressHelper {

    static create = async (address: Address, callback) => {
        try {
            const query = await MongoHelper.client.db('Mooki_Development').collection('address');
            var result = await query.insertOne(address, function (err, res) {
                if (err) {
                    console.log(err);
                    var JsonResponse = {
                        status: 'failed',
                        message: 'failed to created address information',
                        data: err,

                    }
                    const jsonres : JsonResponseInterface =JsonResponse ;
                    return callback(jsonres);
                }
                console.log(res);
                var jsonRes : JsonResponseInterface={
                    status : 'success',
                    message :'address information successfully created',
                    data :res.insertedId,

                }

                return callback(jsonRes);
            });

        } catch (error) {
            console.log(error);
        }
    }

    static update = async (address: Address, storageId: string, callback) => {
        try {
            const query = await MongoHelper.client.db('Mooki_Development').collection('address');
            var result = query.updateOne({ _id: storageId }, { address }, function (err, res) {
                if (err) {
                    console.log(err);
                    var JsonResponse = {
                        status: 'failed',
                        message: 'failed to update address information',
                        data: err,
                        code: 400
                    }
                    const jsonres : JsonResponseInterface =JsonResponse ;
                    return callback(jsonres);
                }
                console.log(res)
                var jsonRes : JsonResponseInterface;
                jsonRes.status = 'success';
                jsonRes.message ='address information updated successdully ';
                jsonRes.data =res.upsertedId;


            });

        } catch (error) {
            console.log(error);

        }
    }

    static getUserAddress = async(userId: string,callback) => {
        try {
            const collection = MongoHelper.client.db('Mooki_Development').collection('address');
            var result = collection.findOne({ _id: userId }, function (err, res) {
                if (err) {
                    var JsonResponse = {
                        status: 'failed',
                        message: 'failed to fetch user address information',
                        data: {},
                        code: 404
                    }
                     console.log(err);
                    var jsonres : JsonResponseInterface = JsonResponse ;
                    return callback(jsonres);

                }
                const address: Address = res;
                console.log(address);
                var jsonres : JsonResponseInterface;
                 jsonres.status = 'success';
                 jsonres.message = 'user address data has been fetched';
                 jsonres.data = address;

                return callback(jsonres);

            });

        } catch (error) {
            console.log(error);
        }

    }



}