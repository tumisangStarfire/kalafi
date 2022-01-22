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
class CurrentMedicationHelper {
}
exports.CurrentMedicationHelper = CurrentMedicationHelper;
CurrentMedicationHelper.create = (currentMedication, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('currentmedication');
        var result = query.insertOne(currentMedication, function (err, res) {
            if (err) {
                console.log(err);
                var jsonRes = {
                    status: 'failed',
                    message: 'failed to add medication information',
                    data: err,
                };
                return callback(jsonRes);
            }
            var jsonRes = {
                status: 'success',
                message: 'medication information added succesfully',
                data: res.insertedId,
            };
            //console.log(res);
            return callback(jsonRes);
        });
    }
    catch (error) {
        console.log(error);
    }
});
CurrentMedicationHelper.remove = (storageId, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('currentmedication');
        var deleteParams = { _id: storageId };
        var result = query.deleteOne(deleteParams, function (err, res) {
            if (err) {
                console.log(err);
                var jsonRes = {
                    status: 'failed',
                    message: 'failed to delete medication information',
                    data: err,
                };
                return callback(jsonRes);
            }
            //console.log(res);
            var jsonRes = {
                status: 'success',
                message: 'medication information deleted succesfully',
                data: res.deletedCount,
            };
            return callback(jsonRes);
        });
    }
    catch (error) {
        console.log(error);
    }
});
CurrentMedicationHelper.getMedicationDataUsingUserId = (userId, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collection = MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('currentmedication');
        var result = collection.find({ userId: userId }).toArray(function (err, res) {
            if (err) {
                var JsonResponse = {
                    status: 'failed',
                    message: 'failed to fetch user medication information',
                    data: {},
                };
                // console.log(err);
                var jsonres = JsonResponse;
                return callback(jsonres);
            }
            //array of medical data
            var currentmedication;
            currentmedication = res;
            // console.log(currentmedication);
            var jsonres = {
                status: 'success',
                message: 'user medication data has been fetched',
                data: currentmedication,
            };
            return callback(currentmedication);
        });
    }
    catch (error) {
        console.log(error);
    }
});
//# sourceMappingURL=CurrentMedicationHelper.js.map