import { CurrentMedication } from '../models/CurrentMedication';
import { MongoHelper } from '../database/MongoHelper';
import { JsonResponseInterface } from '../interfaces/JsonResponseInterface';
var ObjectId = require('mongodb').ObjectID;

export class CurrentMedicationHelper {

    static create = async (currentMedication: CurrentMedication, callback) => {
        try {
            const query =  MongoHelper.client.db('Mooki_Development').collection('currentmedication');
            var result = query.insertOne(currentMedication, function (err, res) {
                if (err) {
                    console.log(err);
                    var jsonRes : JsonResponseInterface={
                        status : 'failed',
                        message :'failed to add medication information',
                        data :err,
                    };
                    return callback(jsonRes);
                }
                var jsonRes : JsonResponseInterface= {
                    status : 'success',
                    message :'medication information added succesfully',
                    data :res.insertedId,
                };


                //console.log(res);
                return callback(jsonRes);
            });
        } catch (error) {
            console.log(error);
        }
    }

    static remove = async (storageId:string, callback) => {
        try {
            const query =  MongoHelper.client.db('Mooki_Development').collection('currentmedication');
            var deleteParams = { _id: storageId };
            var result = query.deleteOne(deleteParams, function (err, res) {
                if (err) {
                    console.log(err);
                    var jsonRes : JsonResponseInterface={
                        status : 'failed',
                        message :'failed to delete medication information',
                        data :err,
                    }
                    return callback(jsonRes);

                }
                //console.log(res);
                var jsonRes : JsonResponseInterface={
                    status : 'success',
                    message :'medication information deleted succesfully',
                    data :res.deletedCount,
                };


                return callback(jsonRes);
            });

        } catch (error) {
            console.log(error);
        }
    }

    static getMedicationDataUsingUserId = async (userId:string, callback) => {
        try {
            const collection = MongoHelper.client.db('Mooki_Development').collection('currentmedication');

            var result = collection.find({ userId: userId }).toArray(function (err, res) {
                if (err) {
                    var JsonResponse = {
                        status: 'failed',
                        message: 'failed to fetch user medication information',
                        data: {},

                    }
                // console.log(err);
                    var jsonres : JsonResponseInterface = JsonResponse ;
                    return callback(jsonres);
                }

                //array of medical data
                var currentmedication: Array<CurrentMedication>;
                currentmedication = res;
               // console.log(currentmedication);
                var jsonres : JsonResponseInterface={
                    status :'success',
                    message :'user medication data has been fetched',
                    data : currentmedication,

                };


                return callback(currentmedication);
            });

        } catch (error) {
            console.log(error);
        }
    }
}