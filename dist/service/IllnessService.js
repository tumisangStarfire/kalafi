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
class IllnessService {
}
exports.default = IllnessService;
/**creates and saves a new illness a patient has gone through */
IllnessService.create = (illness, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = MongoHelper_1.MongoHelper.getDatabase().collection('illnesses');
        var result = query.insertOne(illness, function (err, res) {
            if (err) {
                // console.log(err);
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
            //console.log(data);
            return callback(jsonRes);
        });
    }
    catch (error) {
        console.log(error);
    }
});
IllnessService.getIllnessById = (id, callbacl) => __awaiter(void 0, void 0, void 0, function* () {
});
/**removes any illness data */
IllnessService.remove = (id, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = MongoHelper_1.MongoHelper.getDatabase().collection('illnesses');
        var deleteParams = { _id: new ObjectId(id) };
        var result = query.deleteOne(deleteParams, function (err, res) {
            if (err) {
                var jsonRes = {
                    status: 'failed',
                    message: 'failed to delete medical information',
                    data: err,
                };
                return callback(jsonRes);
            }
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
IllnessService.illnessApi = callback => {
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
//# sourceMappingURL=IllnessService.js.map