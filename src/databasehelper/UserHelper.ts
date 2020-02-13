import { User } from '../models/User';
import { MongoHelper } from '../database/MongoHelper';
import { OTPHelper } from './OTPHelper';
import { LoginInterface } from '../interfaces/LoginInterface';
var ObjectId = require('mongodb').ObjectID;
const bcrypt = require('bcrypt');



export class UserHelper {


    /**function to save a new user registration, it wil be called by the Registration Controller */
    static create = async (user: User, callback) => {
        try {

            const query = MongoHelper.client.db('Mooki_Development').collection('users');

            if (await query.findOne({ cellphone: user.cellphone })) {
                var JsonResponse = {
                    status: 'failed',
                    message: 'user with that email exists',
                    code: 404
                }
                return callback(JsonResponse);
            } else {
                //this is a synchronous call, if there is an error on creating the user the program wil stop 
                const hashedPassword = await bcrypt.hash(user.password, 10);
                user.setPassword = hashedPassword;

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


            }

        } catch (error) {
            console.log(error);
        }
    }

    static login = async (login: LoginInterface, callback) => {
        try {
            //  const logInData: LoginInterface = login; //TODO check if the account is verified, check if the account status is active
            const collection = MongoHelper.client.db('Mooki_Development').collection('users');
            //check if the user exists
            const userExists = await collection.findOne({ cellphone: login.cellphone });
            if (userExists) {

                const isPasswordMatching = await bcrypt.compare(login.password, userExists.password);

                if (isPasswordMatching) {
                    var JsonResponse = {
                        status: 'success',
                        message: 'logged in',
                        code: 200
                    }
                    return callback(JsonResponse);
                } else {
                    return callback(new Error('Password error'));
                }
            } else {
                return callback(new Error('wrong Credentials entered'));
            }
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

