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
class PatientRecordService {
}
exports.default = PatientRecordService;
PatientRecordService.storeUserIllness = (userIllness, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = MongoHelper_1.MongoHelper.getDatabase().collection('userillness');
        var result = query.insertOne(userIllness, function (err, res) {
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
PatientRecordService.getUserIllnessUsingUserId = (userId, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collection = MongoHelper_1.MongoHelper.getDatabase().collection('userillness');
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
            var illnesses;
            illnesses = res;
            var jsonres = {
                status: 'success',
                message: 'user illnesses data has been fetched',
                data: illnesses,
            };
            //console.log(injury);
            return callback(illnesses);
        });
    }
    catch (error) {
        console.log(error);
    }
});
PatientRecordService.storeUserInjury = (userIllness, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = MongoHelper_1.MongoHelper.getDatabase().collection('userinjury');
        var result = query.insertOne(userIllness, function (err, res) {
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
PatientRecordService.getUserInjuriesUsingUserId = (userId, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collection = MongoHelper_1.MongoHelper.getDatabase().collection('userinjury');
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
                message: 'user userinjury data has been fetched',
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
//# sourceMappingURL=PatientRecordService.js.map