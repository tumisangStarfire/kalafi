import { User } from '../models/User';
import { MongoHelper } from '../database/MongoHelper';
import { OTPHelper } from './OTPHelper';
import { LoginInterface } from '../interfaces/LoginInterface';
import { TokenData } from '../interfaces/TokenData';
var ObjectId = require('mongodb').ObjectID;
import * as bcrypt from 'bcrypt';
import * as jwt from "jsonwebtoken";
const dotenv = require('dotenv');
dotenv.config();
import { JWT_SECRET_KEY } from '../utils/jwebtoken';



export class UserHelper {


    /**function to save a new user registration, it wil be called by the Registration Controller */
    static create = async (user: User, callback) => {
        try {

            const query = MongoHelper.client.db('Mooki_Development').collection('users');

            if (await query.findOne({ cellphone: user.getCellphone })) {
                var JsonResponse = {
                    status: 'failed',
                    message: 'user with that cellphone exists',
                    code: 404
                }
                return callback(JsonResponse);
            } else {
                //this is a synchronous call, if there is an error on creating the user the program wil stop 
                const hashedPassword = await bcrypt.hash(user.getPassword, 10);
                user.setPassword = hashedPassword;

                var result = query.insertOne(user);
                result.then(async (res) => {
                    //id user created
                    await OTPHelper.saveOTP(user.getCellphone, result => {
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

    static resetPassword = (id, password: string, confirmPassword: string, callback) => {
        try {
            //find the user with id, check if password and confirmPassword strings match,  if they match save the password. 
            if (password === confirmPassword) {
                const collection = MongoHelper.client.db('Mooki_Development').collection('users');
                var findUser = collection.findOne({ _id: new ObjectId(id) });
                /**if user exists then do the following */
                findUser.then((res) => {
                    //password hashing  
                    const hashedPassword = bcrypt.hash(password, 10);

                    var newPassword = { $set: { password: hashedPassword } };
                    var updateUserPassword = collection.updateOne({ _id: new ObjectId(id) }, newPassword, function (err, updateRes) {
                        if (err) {
                            /***return failed to reset password to user */
                            console.log(err);
                        }
                        /**return password reset */
                        console.log(updateRes);
                        return callback(updateRes.upsertedCount);
                    });
                });

                /** return the error to the response  */
                findUser.catch((err) => {
                    return callback(err);
                });

            } else {
                var JsonResponse = {
                    status: "failed",
                    message: "Password and Confirm Password do not match",
                    code: 404
                }
                return callback(JsonResponse);
            }

        } catch (error) {
            console.log(error);
        }
    }

    static verifyUserCellphone = (cellphone: number, callback) => {
        try {
            var cellphoneExists = false;
            const collection = MongoHelper.client.db('Mooki_Development').collection('users');
            var result = collection.findOne({ cellphone: cellphone }, function (err, res) {
                if (err) {
                    //return a proper response to the user
                    console.log(err);
                }
                if (res !== null) {
                    cellphoneExists = true;
                    return callback(cellphoneExists);
                }

            });
            return callback(cellphoneExists);
        } catch (error) {
            console.log(error);
        }
    }

    static createToken = (device_uniqueID, userId, callback) => {
        try {
            const today = new Date();
            const expirationDate = new Date(today);
            expirationDate.setDate(today.getDate() + 60);

            let token = btoa(JWT_SECRET_KEY + userId + device_uniqueID); // the token is encoded using base64
            var tokenData: TokenData = {
                token: token,
                userId: userId,
                device_uniqueID: '', //unique id of the device, 
                applicationEnv: process.env.NODE_ENV,
                applicationId: '', //id of the application from google play store Store or apple play store,   
                expirationTimestamp: expirationDate

            }
            return callback(tokenData);
        } catch (error) {
            console.log(error)
        }
    }

    static saveAccessToken = (tokenData: TokenData, callback) => {
        try {
            const collection = MongoHelper.client.db('Mooki_Development').collection('users');
            var result = collection.insertOne(tokenData).then(() => callback(null))
                .catch(error => callback(error))

        } catch (error) {
            console.log(error);
        }
    }

    /* validate token for API calls**/
    static validateToken = () => {

    }




}

