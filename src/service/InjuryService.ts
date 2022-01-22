
import { JsonResponseInterface } from "../interfaces/JsonResponseInterface";
import { MongoHelper } from '../database/MongoHelper';
import Injury from '../models/Injury';
var ObjectId = require('mongodb').ObjectID;


export default class InjuryService {
    /** save the vitals , afterwards save the injury, save the PillPresriptio data  */
    static create = async (injury: Injury, callback) => {
        try {

            const query =MongoHelper.getDatabase().collection('injuries');
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

    static remove = async (_id : string, callback) => {
        try {
            const query =MongoHelper.getDatabase().collection('injuries');
            var deleteParams = { _id: _id };
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

    

    static getAllInjuryData = async callback=>{
        try {
            const collection = MongoHelper.getDatabase().collection('injuries');

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