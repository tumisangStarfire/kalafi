import { databaseConnector } from '../database/databaseConnector';
import { UserAllergy } from 'models/UserAllergy';
import { MongoHelper } from '../database/MongoHelper';
var ObjectId = require('mongodb').ObjectID;

export class UserAllergyLogic {

    static create = async (allergy: UserAllergy, callback) => {
        try {
            const query = await MongoHelper.client.db('Mooki_Development').collection('userallergy');
            var result = await query.insertOne(allergy, function (err, data) {
                if (err) {
                    console.log(err);
                }
                console.log(data)
                return callback(data.insertedId);
            });


        } catch (error) {
            console.log(error)
        }
    }
    static remove = async (id, callback) => {
        try {
            const query = await MongoHelper.client.db('Mooki_Development').collection('userallergy');
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

    static getUserAllergiesUsingUserId = async (userId, callback) => {
        try {
            const collection = MongoHelper.client.db('Mooki_Development').collection('userallergy');

            var result = collection.find({ userId: new ObjectId(userId) }).toArray(function (err, res) {
                if (err) {
                    console.log(err);
                }
                var userallergy: Array<UserAllergy>;
                userallergy = res;
                console.log(userallergy);
                return callback(userallergy);
            });


        } catch (error) {
            console.log(error);
        }
    }

}