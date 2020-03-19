import { Illness } from 'models/Illness';
import { MongoHelper } from '../database/MongoHelper';
var ObjectId = require('mongodb').ObjectID;
const axios = require('axios').default;
var stringify = require('json-stringify-safe');

export class IllnessHelper {
    /**creates and saves a new illness a patient has gone through */
    static create = async (illness: Illness, callback) => {
        try {

            const query = await MongoHelper.client.db('Mooki_Development').collection('illness');
            var result = await query.insertOne(illness, function (err, data) {
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
    /**removes any illness data */
    static remove = async (id, callback) => {
        try {
            const query = await MongoHelper.client.db('Mooki_Development').collection('illness');
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
    /**return historical data of patients illness */
    static getUserIllnessDataUsingUserId = async (userId, callback) => {
        try {
            const collection = MongoHelper.client.db('Mooki_Development').collection('illness');

            var result = collection.find({ userId: new ObjectId(userId) }).toArray(function (err, res) {
                if (err) {
                    console.log(err);
                }
                var illness: Array<Illness>;
                illness = res;
                console.log(illness);
                return callback(illness);
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