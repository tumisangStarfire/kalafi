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
class CurrentMedicalConditionHelper {
}
exports.CurrentMedicalConditionHelper = CurrentMedicalConditionHelper;
CurrentMedicalConditionHelper.create = (currentMedicalCondition, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('currentmedicalcondition');
        var result = query.insertOne(currentMedicalCondition, function (err, res) {
            if (err) {
                console.log(err);
                var jsonRes;
                jsonRes.status = 'failed';
                jsonRes.message = 'failed to add medical information';
                jsonRes.data = err;
                jsonRes.code = 404;
            }
            var jsonRes;
            jsonRes.status = 'success';
            jsonRes.message = 'medical information added succesfully';
            jsonRes.data = res.insertedId;
            jsonRes.code = 200;
            console.log(res);
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
                var jsonRes;
                jsonRes.status = 'failed';
                jsonRes.message = 'failed to delete medical information';
                jsonRes.data = err;
                jsonRes.code = 404;
            }
            console.log(res);
            var jsonRes;
            jsonRes.status = 'success';
            jsonRes.message = 'medical information deleted succesfully';
            jsonRes.data = res.deletedCount;
            jsonRes.code = 201;
            return callback(jsonRes);
        });
    }
    catch (error) {
        console.log(error);
    }
});
CurrentMedicalConditionHelper.getMedicationConditionDataUsingUserId = (userId, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collection = MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('currentmedicalcondition');
        var result = collection.find({ userId: userId }).toArray(function (err, res) {
            if (err) {
                var JsonResponse = {
                    status: 'failed',
                    message: 'failed to fetch user medication information',
                    data: {},
                    code: 404
                };
                console.log(err);
                var jsonres = JsonResponse;
                return callback(jsonres);
            }
            //array of medical data 
            var currentmedication;
            currentmedication = res;
            // console.log(currentmedication); 
            var jsonres;
            jsonres.status = 'success';
            jsonres.message = 'user medication data has been fetched';
            jsonres.data = currentmedication;
            jsonres.code = 200;
            return callback(jsonres);
        });
    }
    catch (error) {
        console.log(error);
    }
});
//# sourceMappingURL=CurrentMedicalConditionHelper.js.map