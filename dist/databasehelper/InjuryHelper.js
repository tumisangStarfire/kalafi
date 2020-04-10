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
class InjuryHelper {
}
exports.InjuryHelper = InjuryHelper;
/** save the vitals , afterwards save the injury, save the PillPresriptio data  */
InjuryHelper.create = (injury, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('injury');
        var result = query.insertOne(injury, function (err, data) {
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
InjuryHelper.remove = (storageId, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('injury');
        var deleteParams = { _id: storageId };
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
InjuryHelper.getUserInjuriesUsingUserId = (userId, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collection = MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('injury');
        var result = collection.find({ userId: userId }).toArray(function (err, res) {
            if (err) {
                console.log(err);
            }
            var injury;
            injury = res;
            console.log(injury);
            return callback(injury);
        });
    }
    catch (error) {
        console.log(error);
    }
});
InjuryHelper.getAllInjuryData = (callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collection = MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('typesofinjuries');
        var result = collection.find().toArray(function (err, data) {
            if (err) {
                console.log(err);
            }
            console.log(data);
            return callback(data);
        });
    }
    catch (error) {
        console.log(error);
    }
});
//# sourceMappingURL=InjuryHelper.js.map