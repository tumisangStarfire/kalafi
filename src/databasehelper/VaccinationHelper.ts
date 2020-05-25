import { UserVaccine } from "models/UserVaccine";
var ObjectId = require('mongodb').ObjectID;
import { MongoHelper } from "../database/MongoHelper";
import { JsonResponseInterface } from "../interfaces/JsonResponseInterface";

export class VaccinationHelper {
    /**function to add a new vacination of user_id */
    static async create(vacination: UserVaccine, callback) {
        try {
            const query = await MongoHelper.client.db('Mooki_Development').collection('uservaccination');
            var result = await query.insertOne(vacination, function (err, res) {
                if (err) {
                    console.log(err);
                    var jsonRes : JsonResponseInterface ={
                        status : 'failed',
                        message :'failed to add medical information',
                        data :err,

                    };
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

    /**function to remove vaccination record of id */
    static remove = async (id, callback) => {
        try {
            const query = await MongoHelper.client.db('Mooki_Development').collection('uservaccination');
            var deleteParams = { _id: new ObjectId(id) };
            var result = query.deleteOne(deleteParams, function (err, res) {
                if (err) {
                    console.log(err);
                }
                console.log(res)
                return callback(res.deletedCount);
            });
        } catch (error) {
            console.log(error);
        }
    }

    /**function to get all vacinnes */

    static getAllVaccines = async callback =>{
        try {
            const collection = MongoHelper.client.db('Mooki_Development').collection('vaccines');
            var result = collection.find({}).toArray(function(err,data){
                if (err) {
                    console.log(err);
                }
                console.log(data);
                return callback(data);
            })
        } catch (error) {
            console.log(error);
        }
    }

    static getAllUserVaccineData = async (userId:string,callback) =>{
        try {
            const collection = MongoHelper.client.db('Mooki_Development').collection('uservaccines');
            var result = collection.find({userId:userId}).toArray(function(err,data){
                if (err) {
                    console.log(err);
                }
                console.log(data);
                return callback(data);
            })
        } catch (error) {
            console.log(error);
        }
    }
}