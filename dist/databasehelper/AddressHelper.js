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
class AddressHelper {
}
exports.AddressHelper = AddressHelper;
AddressHelper.create = (address, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = yield MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('address');
        var result = yield query.insertOne(address, function (err, res) {
            if (err) {
                console.log(err);
                var JsonResponse = {
                    status: 'failed',
                    message: 'failed to created address information',
                    data: err,
                    code: 400
                };
                const jsonres = JsonResponse;
                return callback(jsonres);
            }
            console.log(res);
            var jsonRes;
            jsonRes.status = 'success';
            jsonRes.message = 'address information successfully created';
            jsonRes.data = res.insertedId;
            jsonRes.code = 200;
            return callback(jsonRes);
        });
    }
    catch (error) {
        console.log(error);
    }
});
AddressHelper.update = (address, storageId, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = yield MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('address');
        var result = query.updateOne({ _id: storageId }, { address }, function (err, res) {
            if (err) {
                console.log(err);
                var JsonResponse = {
                    status: 'failed',
                    message: 'failed to update address information',
                    data: err,
                    code: 400
                };
                const jsonres = JsonResponse;
                return callback(jsonres);
            }
            console.log(res);
            var jsonRes;
            jsonRes.status = 'success';
            jsonRes.message = 'address information updated successdully ';
            jsonRes.data = res.upsertedId;
            jsonRes.code = 200;
        });
    }
    catch (error) {
        console.log(error);
    }
});
AddressHelper.getUserAddress = (userId, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collection = MongoHelper_1.MongoHelper.client.db('Mooki_Development').collection('address');
        var result = collection.findOne({ _id: userId }, function (err, res) {
            if (err) {
                var JsonResponse = {
                    status: 'failed',
                    message: 'failed to fetch user address information',
                    data: {},
                    code: 404
                };
                console.log(err);
                var jsonres = JsonResponse;
                return callback(jsonres);
            }
            const address = res;
            console.log(address);
            var jsonres;
            jsonres.status = 'success';
            jsonres.message = 'user address data has been fetched';
            jsonres.data = address;
            jsonres.code = 200;
            return callback(jsonres);
        });
    }
    catch (error) {
        console.log(error);
    }
});
//# sourceMappingURL=AddressHelper.js.map