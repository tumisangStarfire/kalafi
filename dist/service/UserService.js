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
const User_1 = require("../models/User");
const MongoHelper_1 = require("../database/MongoHelper");
const mongodb_1 = require("mongodb");
const bcrypt = require("bcrypt");
const dotenv = require('dotenv');
dotenv.config();
exports.JWT_SECRET_KEY = process.env.JWT_SECRET;
class UserService {
}
exports.default = UserService;
/**function to save a new user registration, it wil be called by the Registration Controller */
UserService.create = (user, callback) => {
    try {
        const query = MongoHelper_1.MongoHelper.getDatabase().collection('users');
        var userExists = UserService.checkIfUserExists(user.email);
        if (userExists) {
            var jsonRes = {
                status: 'failed',
                message: 'user with that email already exists',
                data: null
            };
            return callback(jsonRes);
        }
        else {
            var hashedPassword = User_1.default.hashPassword(user.password);
            user.password = hashedPassword;
            user.status = 1;
            user.created_at = new Date();
            user.updated_at = new Date();
            var result = query.insertOne(user);
            result.then((res) => __awaiter(void 0, void 0, void 0, function* () {
                var jsonRes = {
                    status: 'success',
                    message: 'User Created',
                    data: res
                };
                return callback(jsonRes);
            }));
            /** return the error to the response*/
            result.catch((err) => {
                var jsonRes = {
                    status: 'error',
                    message: 'Something happened please try again later',
                    data: err
                };
                return callback(jsonRes);
            });
        }
    }
    catch (error) {
        var jsonRes = {
            status: 'error',
            message: error,
            data: error
        };
        return callback(jsonRes);
    }
};
UserService.findUser = (_id, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collection = MongoHelper_1.MongoHelper.getDatabase().collection('users');
        var result = collection.findOne({ _id: _id }).then((res) => {
            var jsonres = {
                status: 'success',
                message: 'user medication data has been fetched',
                data: res,
            };
            return callback(jsonres);
        }).catch((err) => {
            var jsonres = {
                status: 'success',
                message: 'user medication data has been fetched',
                data: err,
            };
        });
    }
    catch (error) {
        console.log(error);
    }
});
UserService.login = (email, password, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //  const  = login; //TODO check if the account is verified, check if the account status is active
        const collection = MongoHelper_1.MongoHelper.getDatabase().collection('users');
        //check if the user exists
        var userExists = yield UserService.checkIfUserExists(email);
        console.log(userExists);
        if (userExists) {
            var isPasswordMatching = true;
            var result = yield collection.findOne({ email: email }).then((res) => {
                //console.log(res);
                isPasswordMatching = User_1.default.checkIfUnencryptedPasswordIsValid(password, res.password);
                var JsonResponse = {};
                if (isPasswordMatching) {
                    JsonResponse = {
                        status: 'success',
                        message: 'logged in',
                        data: res
                    };
                    return callback(JsonResponse);
                }
                else {
                    JsonResponse = {
                        status: 'failed',
                        message: 'Email or Password incorrect please try again.',
                        data: {}
                    };
                    return callback(JsonResponse);
                }
            });
        }
        else {
            var JsonResponse = {
                status: 'error',
                message: 'Email or Password Incorrect please try again.',
                data: {}
            };
            return callback(JsonResponse);
        }
    }
    catch (error) {
        console.log(error);
    }
});
//User creates password
UserService.createPassword = (userId, password, confirmPassword, callback) => __awaiter(void 0, void 0, void 0, function* () {
    const match = User_1.default.checkIfPasswordAndConfirmPasswordMatch(password, confirmPassword);
    if (match == true) {
        const collection = MongoHelper_1.MongoHelper.getDatabase().collection('users');
        var findUser = collection.findOne({ _id: new mongodb_1.ObjectId(userId) });
        /**if user exists then do the following*/
        findUser.then((res) => {
            //password hashing
            const hashedPassword = bcrypt.hash(password, 10);
            var password = { $set: { password: hashedPassword } };
            var createdPassword = collection.updateOne({ _id: new mongodb_1.ObjectId(userId) }, password, function (err, res) {
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
                };
                const jsonres = JsonResponse;
                return callback(jsonres);
            });
        });
        /** return the error to the response*/
        findUser.catch((err) => {
            return callback(err);
        });
    }
    else {
        var JsonResponse = {
            status: 'failed',
            message: 'password and confirm password should match',
            data: {},
        };
        var jsonres = JsonResponse;
        return callback(jsonres);
    }
});
UserService.getUserById = (id, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collection = MongoHelper_1.MongoHelper.getDatabase().collection('users');
        var result = collection.findOne({ _id: id }, function (err, res) {
            if (err) {
                var JsonResponse = {
                    status: 'failed',
                    message: 'failed to fetch user',
                    data: {},
                };
                console.log(err);
                var jsonres = JsonResponse;
                return callback(jsonres);
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
UserService.resetPassword = (id, password, confirmPassword, callback) => {
    try {
        //find the user with id, check if password and confirmPassword strings match,  if they match save the password.
        if (User_1.default.checkIfPasswordAndConfirmPasswordMatch(password, confirmPassword)) {
            const collection = MongoHelper_1.MongoHelper.getDatabase().collection('users');
            var findUser = collection.findOne({ _id: new mongodb_1.ObjectId(id) });
            /**if user exists then do the following */
            findUser.then((res) => {
                //password hashing
                const hashedPassword = bcrypt.hash(password, 10);
                var newPassword = { $set: { password: hashedPassword } };
                var updateUserPassword = collection.updateOne({ _id: new mongodb_1.ObjectId(id) }, newPassword, function (err, updateRes) {
                    if (err) {
                        /***return failed to reset password to user */
                        var JsonResponse = {
                            status: 'failed',
                            message: 'failed to reset user password',
                            data: {},
                        };
                        console.log(err);
                        var jsonres = JsonResponse;
                        return callback(jsonres);
                    }
                    /**return password reset */
                    var jsonres;
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
        }
        else {
            var JsonResponse = {
                status: "failed",
                message: "Password and Confirm Password do not match",
            };
            return callback(JsonResponse);
        }
    }
    catch (error) {
        console.log(error);
    }
};
UserService.registerBetaUser = (user, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = MongoHelper_1.MongoHelper.getDatabase().collection('betaUsers');
        var result = query.insertOne(user, function (err, res) {
            if (err) {
                console.log(err);
            }
            console.log(res);
            var JsonResponse = {
                status: 'success',
                message: 'Beta User registered',
            };
            return callback(JsonResponse);
        });
    }
    catch (error) {
        console.log(error);
    }
});
UserService.checkIfUserExists = (email) => {
    var userExists = false;
    const collection = MongoHelper_1.MongoHelper.getDatabase().collection('users');
    var result = collection.findOne({ email: email });
    if (result) {
        userExists = true;
    }
    return userExists;
};
UserService.verifyUserEmail = (email, callback) => {
    try {
        var cellphoneExists = false;
        const collection = MongoHelper_1.MongoHelper.getDatabase().collection('users');
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
    }
    catch (error) {
        console.log(error);
    }
};
UserService.createToken = (device_uniqueID, userId, callback) => {
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
UserService.saveAccessToken = (tokenData, callback) => {
    try {
        const collection = MongoHelper_1.MongoHelper.getDatabase().collection('users');
        var result = collection.insertOne(tokenData).then(() => callback(null))
            .catch(error => callback(error));
    }
    catch (error) {
        console.log(error);
    }
};
//# sourceMappingURL=UserService.js.map