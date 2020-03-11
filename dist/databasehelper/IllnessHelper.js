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
const axios = require('axios').default;
var stringify = require('json-stringify-safe');
class IllnessHelper {
}
exports.IllnessHelper = IllnessHelper;
/**creates and saves a new illness a patient has gone through */
IllnessHelper.create = (illness, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = yield MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('illness');
        var result = yield query.insertOne(illness, function (err, data) {
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
/**removes any illness data */
IllnessHelper.remove = (id, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = yield MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('illness');
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
/**return historical data of patients illness */
IllnessHelper.getUserIllnessDataUsingUserId = (userId, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collection = MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('illness');
        var result = collection.find({ userId: new ObjectId(userId) }).toArray(function (err, res) {
            if (err) {
                console.log(err);
            }
            var illness;
            illness = res;
            console.log(illness);
            return callback(illness);
        });
    }
    catch (error) {
        console.log(error);
    }
});
IllnessHelper.illnessApi = callback => {
    try {
        let url = 'https://disease-info-api.herokuapp.com/diseases';
        axios.get(url).then((res) => {
            var data = stringify(res, null, 2);
            return callback(JSON.parse(data));
        }).catch((err) => {
            console.log(err);
        });
    }
    catch (error) {
        console.log(error);
    }
};
//# sourceMappingURL=IllnessHelper.js.map