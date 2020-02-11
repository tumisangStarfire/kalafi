import { CurrentMedication } from 'models/CurrentMedication';
import { MongoHelper } from '../database/MongoHelper';
var ObjectId = require('mongodb').ObjectID;

export class CurrentMedicationHelper {

    static create = async (CurrentMedication: CurrentMedication, callback) => {
        try {
            const query = await MongoHelper.client.db('Mooki_Development').collection('currentmedication');
            var result = await query.insertOne(CurrentMedication, function (err, data) {
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
            const query = await MongoHelper.client.db('Mooki_Development').collection('currentmedication');
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

    static getDataUsingUserId = async (userId, callback) => {
        try {
            const collection = MongoHelper.client.db('Mooki_Development').collection('currentmedication');

            var result = collection.find({ userId: new ObjectId(userId) }).toArray(function (err, res) {
                if (err) {
                    console.log(err);
                }
                var currentmedication: Array<CurrentMedication>;
                currentmedication = res;
                console.log(currentmedication);
                return callback(currentmedication);
            });

        } catch (error) {

        }
    }
}