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
CurrentMedicationHelper.create = (CurrentMedication, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = yield MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('currentmedication');
        var result = yield query.insertOne(CurrentMedication, function (err, data) {
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
CurrentMedicationHelper.remove = (id, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = yield MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('currentmedication');
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
CurrentMedicationHelper.getDataUsingUserId = (userId, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collection = MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('currentmedication');
        var result = collection.find({ userId: new ObjectId(userId) }).toArray(function (err, res) {
            if (err) {
                console.log(err);
            }
            var currentmedication;
            currentmedication = res;
            console.log(currentmedication);
            return callback(currentmedication);
        });
    }
    catch (error) {
    }
});
//# sourceMappingURL=CurrentMedicationHelper.js.map