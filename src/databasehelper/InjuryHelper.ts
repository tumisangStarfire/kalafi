import { databaseConnector } from '../database/databaseConnector';
import { Injury } from 'models/Injury';
import { MongoHelper } from '../database/MongoHelper';
var ObjectId = require('mongodb').ObjectID;

export class InjuryHelper {
    /** save the vitals , afterwards save the injury, save the PillPresriptio data  */
    static create = async (injury: Injury, callback) => {
        try {

            const query = await MongoHelper.client.db('Mooki_Development').collection('injury');
            var result = await query.insertOne(injury, function (err, data) {
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

    static remove = async (id, callback) => {
        try {
            const query = await MongoHelper.client.db('Mooki_Development').collection('injury');
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

    static getUserInjuriesUsingUserId = async (userId, callback) => {
        try {
            const collection = MongoHelper.client.db('Mooki_Development').collection('injury');

            var result = collection.find({ userId: new ObjectId(userId) }).toArray(function (err, res) {
                if (err) {
                    console.log(err);
                }
                var illness: Array<Injury>;
                illness = res;
                console.log(illness);
                return callback(illness);
            });


        } catch (error) {
            console.log(error);
        }
    }
}