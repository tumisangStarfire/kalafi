import { User } from '../models/User';
import { MongoHelper } from '../database/MongoHelper';
import { OTPHelper } from './OTPHelper';
var ObjectId = require('mongodb').ObjectID;



export class UserHelper {


    /**function to save a new user registration, it wil be called by the Registration Controller */
    static create = async (user: User, callback) => {
        try {

            const query = MongoHelper.client.db('Mooki_Development').collection('users');

            //this is a synchronous call, if there is an error on creating the user the program wil stop
            var result = query.insertOne(user);
            result.then(async (res) => {
                //id user created
                await OTPHelper.saveOTP(user.cellphone, result => {
                    //console.log(result);
                    //return the response 
                    return callback(res.insertedCount);
                });
            });
            /** return the error to the response  */
            result.catch((err) => {
                return callback(err);
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

