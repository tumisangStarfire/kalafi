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
        var result = query.insertOne(injury, function (err, res) {
            if (err) {
                // console.log(err);
                var jsonRes = {
                    status: 'failed',
                    message: 'failed to add medical information',
                    data: err,
                };
                return callback(jsonRes);
            }
            // console.log(data);
            var jsonRes = {
                status: 'success',
                message: 'medical information added succesfully',
                data: res.insertedId,
            };
            return callback(jsonRes);
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
                //console.log(err);
                var jsonRes = {
                    status: 'failed',
                    message: 'failed to delete medical information',
                    data: err,
                };
                return callback(jsonRes);
            }
            //console.log(res)
            var jsonRes = {
                status: 'success',
                message: 'medical information deleted succesfully',
                data: res.deletedCount,
            };
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
        var query = { userId: userId };
        var result = collection.find({ userId: userId }).toArray(function (err, res) {
            if (err) {
                console.log(err);
                var jsonRes = {
                    status: 'failed',
                    message: 'failed to fetch medical information',
                    data: err,
                };
                return callback(jsonRes);
            }
            var userinjury;
            userinjury = res;
            var jsonres = {
                status: 'success',
                message: 'user medication data has been fetched',
                data: userinjury,
            };
            //console.log(injury);
            return callback(userinjury);
        });
    }
    catch (error) {
        console.log(error);
    }
});
InjuryHelper.getAllInjuryData = (callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collection = MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('typesofinjuries');
        var result = collection.find({}).toArray(function (err, res) {
            if (err) {
                // console.log(err);
                var jsonres = {
                    status: 'failed',
                    message: 'failed to fetch health facility data',
                    data: {},
                };
                return callback(jsonres);
            }
            var injury;
            injury = res;
            // console.log(data);
            return callback(injury);
        });
    }
    catch (error) {
        console.log(error);
    }
});
//# sourceMappingURL=InjuryHelper.js.map