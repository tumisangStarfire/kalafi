import { CurrentMedicalCondition } from "../models/CurrentMedicalCondition";
import { JsonResponseInterface } from "../interfaces/JsonResponseInterface";
import { MongoHelper } from "../database/MongoHelper";
import { ObjectId } from "mongodb";
//var ObjectId = require('mongodb').ObjectID;

export class CurrentMedicalConditionHelper {


    static create = async (currentMedicalCondition: CurrentMedicalCondition, callback) => {
        try {
            const query =  MongoHelper.client.db('Mooki_Development').collection('currentmedicalcondition');
            var result = query.insertOne(currentMedicalCondition, function (err, res) {
                if (err) {
                    console.log(err);
                    var jsonRes : JsonResponseInterface ={
                    status : 'failed',
                    message:'failed to add medical information',
                    data :err,
                   }
                 return callback(jsonRes);
                }

                var jsonRes : JsonResponseInterface = {
                    status : 'success',
                    message :'medical information added succesfully',
                    data :res.insertedId,

                }

                return callback(jsonRes);
            });
        } catch (error) {
            console.log(error);
        }
    }

    static remove = async (storageId:string, callback) => {
        try {
            const query =  MongoHelper.client.db('Mooki_Development').collection('currentmedicalcondition');
            var deleteParams = { _id: storageId };
            var result = query.deleteOne(deleteParams, function (err, res) {
                if (err) {
                    console.log(err);
                    var jsonRes : JsonResponseInterface ={
                        status : 'failed',
                        message :'failed to delete medical information',
                        data :err,

                    };
                    return callback(jsonRes);
                }
                console.log(res);
                var jsonRes : JsonResponseInterface={
                    status : 'success',
                    message :'medical information deleted succesfully',
                    data :res.deletedCount,
                };
                return callback(jsonRes);
            });

        } catch (error) {
            console.log(error);
        }
    }

    static getMedicationConditionDataUsingUserId = async(userId : string, callback) =>  {
        try {
            //console.log("user id on helper" + vuserId);
            var query = { userId: userId };
            console.log(query)
            const collection =  MongoHelper.client.db('Mooki_Development').collection('currentmedicalcondition');
            await collection.find(query).toArray(function (err, res) {
                if (err) {
                    var JsonResponse = {
                        status: 'failed',
                        message: 'failed to fetch user medication information',
                        data: err,

                    }
                     console.log(err);
                    var jsonres : JsonResponseInterface = JsonResponse ;
                    return callback(jsonres);
                }

                //array of medical data
                var currentmedication: Array<CurrentMedicalCondition>;
                currentmedication = res;
                //console.log(res);
               /* var jsonres : JsonResponseInterface ={
                    status : 'success',
                    message : 'user medication data has been fetched',
                    data : currentmedication,
                }*/
                return callback(currentmedication);
            });

        } catch (error) {
            console.log(error);
        }
    }
}
