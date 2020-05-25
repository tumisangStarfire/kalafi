
import { UserInjury } from '../models/UserInjury';
import { JsonResponseInterface } from "../interfaces/JsonResponseInterface";
import { MongoHelper } from '../database/MongoHelper';
import { Injury } from '../models/Injury';
var ObjectId = require('mongodb').ObjectID;


export class InjuryHelper {
    /** save the vitals , afterwards save the injury, save the PillPresriptio data  */
    static create = async (injury: UserInjury, callback) => {
        try {

            const query = MongoHelper.client.db('Mooki_Development').collection('injury');
            var result = query.insertOne(injury, function (err, res) {
                if (err) {
                   // console.log(err);
                    var jsonRes : JsonResponseInterface ={
                        status : 'failed',
                        message :'failed to add medical information',
                        data :err,

                    };

                    return callback(jsonRes);
                }
               // console.log(data);
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
            const query = MongoHelper.client.db('Mooki_Development').collection('injury');
            var deleteParams = { _id: storageId };
            var result = query.deleteOne(deleteParams, function (err, res) {
                if (err) {
                    //console.log(err);
                    var jsonRes : JsonResponseInterface ={
                        status : 'failed',
                        message :'failed to delete medical information',
                        data :err,

                    };
                    return callback(jsonRes);

                }
                //console.log(res)
                var jsonRes : JsonResponseInterface = {
                    status : 'success',
                    message :'medical information deleted succesfully',
                    data :res.deletedCount,

                }
                return callback(res.deletedCount);
            });

        } catch (error) {
            console.log(error);
        }
    }

    static getUserInjuriesUsingUserId = async (userId:string, callback) => {
        try {
            const collection = MongoHelper.client.db('Mooki_Development').collection('injury');
            var query = { userId: userId };
            var result = collection.find({ userId: userId }).toArray(function (err, res) {
                if (err) {
                    console.log(err);
                    var jsonRes : JsonResponseInterface ={
                        status : 'failed',
                        message :'failed to fetch medical information',
                        data :err,

                    };
                    return callback(jsonRes);
                }
                var injury: Array<UserInjury>;
                injury = res;
                var jsonres : JsonResponseInterface ={
                    status : 'success',
                    message : 'user medication data has been fetched',
                    data : injury,
                }
                //console.log(injury);
                return callback(jsonRes);
            });


        } catch (error) {
            console.log(error);
        }
    }

    static getAllInjuryData = async callback=>{
        try {
            const collection = MongoHelper.client.db('Mooki_Development').collection('typesofinjuries');

            var result = collection.find({}).toArray(function(err,res){
                if (err) {
                   // console.log(err);
                   var jsonres : JsonResponseInterface = {
                    status: 'failed',
                    message: 'failed to fetch health facility data',
                    data: {},

                    } ;
                    return callback(jsonres);
                }
                var injury: Array<Injury>;
                injury = res;
               // console.log(data);
                return callback(injury);
            })
        } catch (error ) {
            console.log(error);
        }
    }
}