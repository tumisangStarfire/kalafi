"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const MongoHelper_1 = require("../database/MongoHelper");
const OTPHelper_1 = require("./OTPHelper");
var ObjectId = require('mongodb').ObjectID;
const bcrypt = require("bcrypt");
const dotenv = require('dotenv');
dotenv.config();
exports.JWT_SECRET_KEY = process.env.JWT_SECRET;
class UserHelper {
}
exports.UserHelper = UserHelper;
/**function to save a new user registration, it wil be called by the Registration Controller */
UserHelper.create = (user, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('users');
        if (yield query.findOne({ cellphone: user.getCellphone })) {
            var JsonResponse = {
                status: 'failed',
                message: 'user with that cellphone exists',
                code: 404
            };
            return callback(JsonResponse);
        }
        else {
            //this is a synchronous call, if there is an error on creating the user the program wil stop 
            const hashedPassword = yield bcrypt.hash(user.getPassword, 10);
            user.setPassword = hashedPassword;
            var result = query.insertOne(user);
            result.then((res) => __awaiter(void 0, void 0, void 0, function* () {
                //id user created
                yield OTPHelper_1.OTPHelper.saveOTP(user.getCellphone, result => {
                    //console.log(result);
                    //return the response 
                    return callback(res.insertedCount);
                });
            }));
            /** return the error to the response  */
            result.catch((err) => {
                return callback(err);
            });
        }
    }
    catch (error) {
        console.log(error);
    }
});
UserHelper.login = (login, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //  const logInData: LoginInterface = login; //TODO check if the account is verified, check if the account status is active
        const collection = MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('users');
        //check if the user exists
        const userExists = yield collection.findOne({ cellphone: login.cellphone });
        if (userExists) {
            const isPasswordMatching = yield bcrypt.compare(login.password, userExists.password);
            if (isPasswordMatching) {
                var JsonResponse = {
                    status: 'success',
                    message: 'logged in',
                    code: 200
                };
                return callback(JsonResponse);
            }
            else {
                return callback(new Error('Password error'));
            }
        }
        else {
            return callback(new Error('wrong Credentials entered'));
        }
    }
    catch (error) {
        console.log(error);
    }
});
UserHelper.getUserById = (id, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collection = MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('users');
        var result = collection.findOne({ _id: new ObjectId(id) }, function (err, res) {
            if (err) {
                console.log(err);
            }
            const user = res;
            console.log(user);
            return callback(user);
        });
    }
    catch (error) {
        console.log(error);
    }
});
UserHelper.resetPassword = (id, password, confirmPassword, callback) => {
    try {
        //find the user with id, check if password and confirmPassword strings match,  if they match save the password. 
        if (password === confirmPassword) {
            const collection = MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('users');
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
        }
        else {
            var JsonResponse = {
                status: "failed",
                message: "Password and Confirm Password do not match",
                code: 404
            };
            return callback(JsonResponse);
        }
    }
    catch (error) {
        console.log(error);
    }
};
UserHelper.registerBetaUser = (user, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('betaUsers');
        var result = query.insertOne(user, function (err, res) {
            if (err) {
                console.log(err);
            }
            console.log(res);
            var JsonResponse = {
                status: 'success',
                message: 'Beta User registered',
                code: 200
            };
            return callback(JsonResponse);
        });
    }
    catch (error) {
        console.log(error);
    }
});
UserHelper.verifyUserCellphone = (cellphone, callback) => {
    try {
        var cellphoneExists = false;
        const collection = MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('users');
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
    }
    catch (error) {
        console.log(error);
    }
};
UserHelper.createToken = (device_uniqueID, userId, callback) => {
    try {
        const today = new Date();
        const expirationDate = new Date(today);
        expirationDate.setDate(today.getDate() + 60);
        let token = btoa(exports.JWT_SECRET_KEY + userId + device_uniqueID); // the token is encoded using base64
        var tokenData = {
            token: token,
            userId: userId,
            device_uniqueID: '',
            applicationEnv: process.env.NODE_ENV,
            applicationId: '',
            expirationTimestamp: expirationDate
        };
        return callback(tokenData);
    }
    catch (error) {
        console.log(error);
    }
};
UserHelper.saveAccessToken = (tokenData, callback) => {
    try {
        const collection = MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('users');
        var result = collection.insertOne(tokenData).then(() => callback(null))
            .catch(error => callback(error));
    }
    catch (error) {
        console.log(error);
    }
};
/* validate token for API calls**/
UserHelper.validateToken = () => {
};
//# sourceMappingURL=UserHelper.js.map