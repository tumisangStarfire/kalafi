import { User } from '../models/User';
import { MongoHelper } from '../database/MongoHelper';
var ObjectId = require('mongodb').ObjectID;



export class UserHelper {


    /**function to save a new user registration, it wil be called by the Registration Controller */
    static create = async (user: User, callback) => {
        try {
           // console.log(user);
            const query = await MongoHelper.client.db('Mooki_Development').collection('users');
            var result = await query.insertOne(user, function (err, data) {
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

    static getUserById = async (id, callback) => {
        try {
            const collection = MongoHelper.client.db('Mooki_Development').collection('users');
            var result = collection.findOne({ _id: new ObjectId(id) }, function (err, res) {
                if (err) {
                    console.log(err);
                }
                const user: User = res;
                console.log(user);
                return callback(user);

            });

        } catch (error) {
            console.log(error);
        }
    }

}

