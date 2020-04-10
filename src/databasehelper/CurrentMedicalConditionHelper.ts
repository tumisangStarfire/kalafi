import { CurrentMedicalCondition } from "../models/CurrentMedicalCondition";
import { JsonResponseInterface } from "../interfaces/JsonResponseInterface";
import { MongoHelper } from "../database/MongoHelper";

export class CurrentMedicalConditionHelper {
   

    static create = async (currentMedicalCondition: CurrentMedicalCondition, callback) => {
        try {
            const query =  MongoHelper.client.db('Mooki_Development').collection('currentmedicalcondition');
            var result = query.insertOne(currentMedicalCondition, function (err, res) {
                if (err) {
                    console.log(err); 
                    var jsonRes : JsonResponseInterface; 
                    jsonRes.status = 'failed';  
                    jsonRes.message ='failed to add medical information'; 
                    jsonRes.data =err; 
                    jsonRes.code =404;
                }   
                var jsonRes : JsonResponseInterface; 
                    jsonRes.status = 'success';  
                    jsonRes.message ='medical information added succesfully'; 
                    jsonRes.data =res.insertedId; 
                    jsonRes.code =200;

                console.log(res);
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
                    var jsonRes : JsonResponseInterface; 
                    jsonRes.status = 'failed';  
                    jsonRes.message ='failed to delete medical information'; 
                    jsonRes.data =err; 
                    jsonRes.code =404;
                }
                console.log(res);
                var jsonRes : JsonResponseInterface; 
                    jsonRes.status = 'success';  
                    jsonRes.message ='medical information deleted succesfully'; 
                    jsonRes.data =res.deletedCount; 
                    jsonRes.code =201;
                return callback(jsonRes);
            });

        } catch (error) {
            console.log(error);
        }
    }

    static getMedicationConditionDataUsingUserId=async(userId: string, callback) =>  {
        try {
            const collection = MongoHelper.client.db('Mooki_Development').collection('currentmedicalcondition');

            var result = collection.find({ userId: userId }).toArray(function (err, res) {
                if (err) {
                    var JsonResponse = {
                        status: 'failed',
                        message: 'failed to fetch user medication information', 
                        data: {},
                        code: 404
                    }   
                     console.log(err);
                    var jsonres : JsonResponseInterface = JsonResponse ; 
                    return callback(jsonres);
                }  

                //array of medical data 
                var currentmedication: Array<CurrentMedicalCondition>;
                currentmedication = res;
               // console.log(currentmedication); 
                var jsonres : JsonResponseInterface; 
                jsonres.status = 'success';
                jsonres.message = 'user medication data has been fetched'; 
                jsonres.data = currentmedication; 
                jsonres.code =200; 
                
                return callback(jsonres);
            });

        } catch (error) {
            console.log(error);
        }
    }
}