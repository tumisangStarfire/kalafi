import { User } from '../models/User';
import { MongoHelper } from '../database/MongoHelper';
import { OTPHelper } from './OTPHelper';
import { LoginInterface } from '../interfaces/LoginInterface'; 
import { JsonResponseInterface } from '../interfaces/JsonResponseInterface';
import { TokenData } from '../interfaces/TokenData';
var ObjectId = require('mongodb').ObjectID;
import * as bcrypt from 'bcrypt';
import * as jwt from "jsonwebtoken";
const dotenv = require('dotenv');
dotenv.config();


export const JWT_SECRET_KEY = process.env.JWT_SECRET;

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
                var result = query.insertOne(user); 
                
                result.then(async (res) => {
                    //id user created
                    await OTPHelper.saveOTP(user.getCellphone, result => {
                        //console.log(result);
                        //return the response  
                        var JsonResponse = {
                            status: 'success',
                            message: 'user sucessfully created', 
                            data: res.insertedCount,
                            code: 200
                        } 
                        const jsonres : JsonResponseInterface =JsonResponse ;
                        return callback(jsonres);
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
    //User creates password
    static createPassword =async (userId,password,confirmPassword,callback) => { 
       
        const match = User.checkIfPasswordAndConfirmPasswordMatch(password, confirmPassword); 

        if(match == true){  
            const collection = MongoHelper.client.db('Mooki_Development').collection('users');
            var findUser = collection.findOne({ _id: new ObjectId(userId) });
            /**if user exists then do the following */
            findUser.then((res) => {
                //password hashing  
                const hashedPassword = bcrypt.hash(password, 10);

                var password = { $set: { password: hashedPassword } };
                var createdPassword = collection.updateOne({ _id: new ObjectId(userId) }, password, function (err, res) {
                    if (err) {
                        /***return failed to create password to user */
                        console.log(err);
                    }
                    /**return password reset */
                    console.log(res); 
                    var JsonResponse = {
                        status: 'success',
                        message: 'password Created', 
                        data: res.upsertedCount,
                        code: 200
                    } 
                    const jsonres : JsonResponseInterface =JsonResponse ;
                    return callback(jsonres);
                });
            }); 

             /** return the error to the response  */
             findUser.catch((err) => {
                return callback(err);
            });

        }else{
            var JsonResponse = {
                status: 'failed',
                message: 'password and confirm password should match', 
                data: {},
                code: 400
            }  
           var jsonres : JsonResponseInterface = JsonResponse ; 
            return callback(jsonres);
        }


    }

    static getUserById = async (id, callback) => {
        try {
            const collection = MongoHelper.client.db('Mooki_Development').collection('users');
            var result = collection.findOne({ _id: new ObjectId(id) }, function (err, res) {
                if (err) { 
                    var JsonResponse = {
                        status: 'failed',
                        message: 'failed to fetch user', 
                        data: {},
                        code: 404
                    }   
                     console.log(err);
                    var jsonres : JsonResponseInterface = JsonResponse ; 
                    return callback(jsonres);
                   
                }
                const user: User = res;
                console.log(user); 
                var jsonres : JsonResponseInterface; 
                 jsonres.status = 'success';
                 jsonres.message = 'user data has been fetched'; 
                 jsonres.data = user; 
                 jsonres.code =200; 
                return callback(jsonres);

            });

        } catch (error) {
            console.log(error);
        }
    }

    static resetPassword = (id, password: string, confirmPassword: string, callback) => {
        try {
            //find the user with id, check if password and confirmPassword strings match,  if they match save the password. 
            if (User.checkIfPasswordAndConfirmPasswordMatch(password,confirmPassword)) {
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
                            var JsonResponse = {
                                status: 'failed',
                                message: 'failed to reset user password', 
                                data: {},
                                code: 400
                            }   
                             console.log(err);
                            var jsonres : JsonResponseInterface = JsonResponse ; 
                            return callback(jsonres);
                        }
                        /**return password reset */
                     
                       var jsonres : JsonResponseInterface; 
                        jsonres.status = 'success';
                        jsonres.message = 'user password has been reset'; 
                        jsonres.data = updateRes.upsertedCount; 
                        jsonres.code =200; 
                        return callback(jsonres);
                       
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

    static registerBetaUser = async (user: User, callback) =>{ 
        try {
            const query = MongoHelper.client.db('Mooki_Development').collection('betaUsers');

                var result = query.insertOne(user,function(err,res){
                    if(err){ 
                        console.log(err)
                    } 
                    console.log(res); 
                    var JsonResponse = {
                        status: 'success',
                        message: 'Beta User registered',
                        code: 200
                    } 
                    return callback(JsonResponse);
                });
            
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

