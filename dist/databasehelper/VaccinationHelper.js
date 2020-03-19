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
var ObjectId = require('mongodb').ObjectID;
const MongoHelper_1 = require("../database/MongoHelper");
class VaccinationHelper {
    /**function to add a new vacination of user_id */
    static create(vacination, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = yield MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('vaccination');
                var result = yield query.insertOne(vacination, function (err, data) {
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
    }
}
exports.VaccinationHelper = VaccinationHelper;
/**function to remove vaccination record of id */
VaccinationHelper.remove = (id, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = yield MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('vaccination');
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
//# sourceMappingURL=VaccinationHelper.js.map