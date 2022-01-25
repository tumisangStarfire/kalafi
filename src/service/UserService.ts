import User from '../models/User';
import { MongoHelper } from '../database/MongoHelper';
import { LoginInterface } from '../interfaces/LoginInterface';
import { JsonResponseInterface } from '../interfaces/JsonResponseInterface';
import { TokenData } from '../interfaces/TokenData';
import { ObjectId, ResumeToken, Timestamp } from "mongodb";
import * as bcrypt from 'bcrypt';
import * as jwt from "jsonwebtoken";
import UserInjury from 'models/UserInjury';
import UserIllness from 'models/UserIllness';
import { IsEmpty } from 'class-validator';
const dotenv = require('dotenv');
dotenv.config();


export const JWT_SECRET_KEY = process.env.JWT_SECRET;

export default class UserService {


    /**function to save a new user registration, it wil be called by the Registration Controller */
    static create =  async (user: User, callback) => {
        try {
             
            
            var userExists = await UserService.checkIfUserExists(user.email);
           console.log(userExists);
            if (userExists) {
                var jsonRes : JsonResponseInterface ={
                    status : 'failed',
                    message :'user with that email already exists',
                    data : null
                };
                return callback(jsonRes);
            } else { 
                const query = MongoHelper.getDatabase().collection('users');
                var hashedPassword = User.hashPassword(user.password);
                user.password = hashedPassword;
                user.status = 1;
                user.created_at = new Date();
                user.updated_at = new Date();
                var result = query.insertOne(user);
                result.then(async (res) => {
                    var jsonRes : JsonResponseInterface ={
                    status : 'success',
                    message :'User Created',
                    data :res
                    };
                    return callback(jsonRes);
                }); 
                /** return the error to the response*/
                result.catch((err) => {
                    var jsonRes : JsonResponseInterface ={
                        status : 'error',
                        message :'Something happened please try again later',
                        data :err
                    };
                    return callback(jsonRes);
                });

            }

        } catch (error) {
            var jsonRes : JsonResponseInterface ={
                status : 'error',
                message :error,
                data :error
                };
            return callback(jsonRes);
           
        }
    } 

    static findUser = async (_id :string,callback) =>{
         try {
            const collection =  MongoHelper.getDatabase().collection('users');

            var result = collection.findOne({ _id: _id }).then( (res) => {
                var jsonres : JsonResponseInterface={
                    status :'success',
                    message :'user medication data has been fetched',
                    data : res,

                };

                return callback(jsonres);
            }).catch((err) =>{
                var jsonres : JsonResponseInterface={
                    status :'success',
                    message :'user medication data has been fetched',
                    data : err,

                };
            });
        } catch (error) {
            console.log(error);
        }
    }

    static login = async (email : string, password : string, callback) => {
        try {
            //  const  = login; //TODO check if the account is verified, check if the account status is active
            const collection =  MongoHelper.getDatabase().collection('users');
            //check if the user exists
            var userExists = await UserService.checkIfUserExists(email);
            console.log(userExists);
            if (userExists) {
                 var isPasswordMatching = true;
                  var result = await collection.findOne({ email : email }).then( (res) => {
                    //console.log(res);
                    isPasswordMatching = User.checkIfUnencryptedPasswordIsValid(password,res.password)
                    var JsonResponse = {}
                    if (isPasswordMatching) {
                        JsonResponse = {
                            status: 'success',
                            message: 'logged in',
                            data : res
                        }
                        return callback(JsonResponse);
                    } else {
                        JsonResponse  = {
                            status: 'failed',
                            message: 'Email or Password incorrect please try again.',
                            data : { }
                        }
                        return callback(JsonResponse);
                    }
                    
                });
            } else {
               var JsonResponse  = {
                    status: 'error',
                    message: 'Email or Password Incorrect please try again.',
                        data : { }
                    }
                return callback(JsonResponse)
            }
        } catch (error) {
            console.log(error);
        }
    }
    //User creates password
    static createPassword =async (userId,password,confirmPassword,callback) => {

        const match = User.checkIfPasswordAndConfirmPasswordMatch(password, confirmPassword);

        if(match == true){
            const collection =  MongoHelper.getDatabase().collection('users');
            var findUser = collection.findOne({ _id: new ObjectId(userId) });
            /**if user exists then do the following*/
            findUser.then((res) => {
                //password hashing
                const hashedPassword = bcrypt.hash(password, 10);

                var password = { $set: { password: hashedPassword } };
                var createdPassword = collection.updateOne({ _id: new ObjectId(userId) }, password, function (err, res) {
                    if (err) {
                        /***return failed to create password to user*/
                        console.log(err);
                    }
                    /**return password reset*/
                    console.log(res);
                    var JsonResponse = {
                        status: 'success',
                        message: 'password Created',
                        data: res.upsertedCount,

                    }
                    const jsonres : JsonResponseInterface =JsonResponse ;
                    return callback(jsonres);
                });
            });

             /** return the error to the response*/
             findUser.catch((err) => {
                return callback(err);
            });

        }else{
            var JsonResponse = {
                status: 'failed',
                message: 'password and confirm password should match',
                data: {},

            }
           var jsonres : JsonResponseInterface = JsonResponse ;
            return callback(jsonres);
        }


    }

    static getUserById = async (id, callback) => {
        try {
           const collection =  MongoHelper.getDatabase().collection('users');
            var result = collection.findOne({ _id: id }, function (err, res) {
                if (err) {
                    var JsonResponse = {
                        status: 'failed',
                        message: 'failed to fetch user',
                        data: {},

                    }
                     console.log(err);
                    var jsonres : JsonResponseInterface = JsonResponse ;
                    return callback(jsonres);

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
            if (User.checkIfPasswordAndConfirmPasswordMatch(password,confirmPassword)) {
                const collection =  MongoHelper.getDatabase().collection('users');
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

                }
                return callback(JsonResponse);
            }

        } catch (error) {
            console.log(error);
        }
    }

    static registerBetaUser = async (user: User, callback) =>{
        try {
            const query =  MongoHelper.getDatabase().collection('betaUsers');

                var result = query.insertOne(user,function(err,res){
                    if(err){
                        console.log(err)
                    }
                    console.log(res);
                    var JsonResponse = {
                        status: 'success',
                        message: 'Beta User registered',

                    }
                    return callback(JsonResponse);
                });

        } catch (error) {
            console.log(error);
        }
    } 

    static checkIfUserExists = async (email: string) : Promise<boolean> =>  {
        var userExists = false;
        const collection =  MongoHelper.getDatabase().collection('users');
       await collection.findOne({ email: email }).then(res =>{
             if (res !== null) { 
                console.log(res);
                userExists = true;
            } 
            
        });
       return userExists;
    }

    static verifyUserEmail = (email: string, callback) => {
        try {
            var cellphoneExists = false;
            const collection =  MongoHelper.getDatabase().collection('users');
            var result = collection.findOne({ email: email }, function (err, res) {
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
            const collection =  MongoHelper.getDatabase().collection('users');
            var result = collection.insertOne(tokenData).then(() => callback(null))
                .catch(error => callback(error))

        } catch (error) {
            console.log(error);
        }
    }

   

    

    




}

