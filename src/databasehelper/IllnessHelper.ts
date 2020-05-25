import { UserIllness } from '../models/UserIllness';
import { MongoHelper } from '../database/MongoHelper';
import { JsonResponseInterface } from "../interfaces/JsonResponseInterface";
var ObjectId = require('mongodb').ObjectID;
const axios = require('axios').default;

var stringify = require('json-stringify-safe');

export class IllnessHelper {
    /**creates and saves a new illness a patient has gone through */
    static create = async (illness: UserIllness, callback) => {
        try {

            const query = MongoHelper.client.db('Mooki_Development').collection('illness');
            var result = query.insertOne(illness, function (err, res) {
                if (err) {
                   // console.log(err);
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
                //console.log(data);
                return callback(jsonRes);
            });

        } catch (error) {
            console.log(error);
        }
    }
    /**removes any illness data */
    static remove = async (id, callback) => {
        try {
            const query = MongoHelper.client.db('Mooki_Development').collection('illness');
            var deleteParams = { _id: new ObjectId(id) };
            var result = query.deleteOne(deleteParams, function (err, res) {
                if (err) {
                    var jsonRes : JsonResponseInterface ={
                        status : 'failed',
                        message :'failed to delete medical information',
                        data :err,

                    };
                    return callback(jsonRes);
                }
                var jsonRes : JsonResponseInterface = {
                    status : 'success',
                    message :'medical information deleted succesfully',
                    data :res.deletedCount,

                }
                return callback(jsonRes);
            });

        } catch (error) {
            console.log(error);
        }
    }
    /**return historical data of patients illness */
    static getUserIllnessDataUsingUserId = async (userId, callback) => {
        try {
            var query = { userId: userId };
            const collection = MongoHelper.client.db('Mooki_Development').collection('illness');

            var result = collection.find(query).toArray(function (err, res) {
                if (err) {
                   // console.log(err);
                    var jsonRes : JsonResponseInterface ={
                        status : 'failed',
                        message :'failed to fetch medical information',
                        data :err,

                    };
                    return callback(jsonres);
                }
                var illness: Array<UserIllness>;
                illness = res;
                //console.log(illness);
                var jsonres : JsonResponseInterface ={
                    status : 'success',
                    message : 'user medication data has been fetched',
                    data : illness,
                }
                return callback(jsonres);
            });

        } catch (error) {
            console.log(error);
        }
    }

    static illnessApi = callback => {
        try {
            let url = 'https://disease-info-api.herokuapp.com/diseases';
            axios.get(url).then((res) => {

                var data = stringify(res, null, 2);

                return callback(JSON.parse(data));
            }).catch((err) => {
                console.log(err);
            });

        } catch (error) {
            console.log(error);
        }
    }
}