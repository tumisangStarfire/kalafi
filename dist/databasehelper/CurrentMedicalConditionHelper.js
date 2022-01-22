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
//var ObjectId = require('mongodb').ObjectID;
class CurrentMedicalConditionHelper {
}
exports.CurrentMedicalConditionHelper = CurrentMedicalConditionHelper;
CurrentMedicalConditionHelper.create = (currentMedicalCondition, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('currentmedicalcondition');
        var result = query.insertOne(currentMedicalCondition, function (err, res) {
            if (err) {
                console.log(err);
                var jsonRes = {
                    status: 'failed',
                    message: 'failed to add medical information',
                    data: err,
                };
                return callback(jsonRes);
            }
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
CurrentMedicalConditionHelper.remove = (storageId, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('currentmedicalcondition');
        var deleteParams = { _id: storageId };
        var result = query.deleteOne(deleteParams, function (err, res) {
            if (err) {
                console.log(err);
                var jsonRes = {
                    status: 'failed',
                    message: 'failed to delete medical information',
                    data: err,
                };
                return callback(jsonRes);
            }
            console.log(res);
            var jsonRes = {
                status: 'success',
                message: 'medical information deleted succesfully',
                data: res.deletedCount,
            };
            return callback(jsonRes);
        });
    }
    catch (error) {
        console.log(error);
    }
});
CurrentMedicalConditionHelper.getMedicationConditionDataUsingUserId = (userId, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //console.log("user id on helper" + vuserId);
        var query = { userId: userId };
        console.log(query);
        const collection = MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('currentmedicalcondition');
        yield collection.find(query).toArray(function (err, res) {
            if (err) {
                var JsonResponse = {
                    status: 'failed',
                    message: 'failed to fetch user medication information',
                    data: err,
                };
                console.log(err);
                var jsonres = JsonResponse;
                return callback(jsonres);
            }
            //array of medical data
            var currentmedication;
            currentmedication = res;
            //console.log(res);
            /* var jsonres : JsonResponseInterface ={
                 status : 'success',
                 message : 'user medication data has been fetched',
                 data : currentmedication,
             }*/
            return callback(currentmedication);
        });
    }
    catch (error) {
        console.log(error);
    }
});
//# sourceMappingURL=CurrentMedicalConditionHelper.js.map