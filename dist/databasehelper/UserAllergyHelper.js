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
var ObjectId = require('mongodb').ObjectID;
class UserAllergyLogic {
}
exports.UserAllergyLogic = UserAllergyLogic;
UserAllergyLogic.create = (allergy, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = yield MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('userallergy');
        var result = yield query.insertOne(allergy, function (err, data) {
            if (err) {
                console.log(err);
            }
            console.log(data);
            return callback(data.insertedId);
        });
    }
    catch (error) {
        console.log(error);
    }
});
UserAllergyLogic.remove = (id, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = yield MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('userallergy');
        var deleteParams = { _id: new ObjectId(id) };
        var result = query.deleteOne(deleteParams, function (err, res) {
            if (err) {
                console.log(err);
            }
            console.log(res);
            return callback(res.deletedCount);
        });
    }
    catch (error) {
        console.log(error);
    }
});
UserAllergyLogic.getUserAllergiesUsingUserId = (userId, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collection = MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('userallergy');
        var result = collection.find({ userId: new ObjectId(userId) }).toArray(function (err, res) {
            if (err) {
                console.log(err);
            }
            var userallergy;
            userallergy = res;
            console.log(userallergy);
            return callback(userallergy);
        });
    }
    catch (error) {
        console.log(error);
    }
});
//# sourceMappingURL=UserAllergyHelper.js.map