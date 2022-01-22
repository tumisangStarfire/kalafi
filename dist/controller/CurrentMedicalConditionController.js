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
const CurrentMedicalConditionHelper_1 = require("../databasehelper/CurrentMedicalConditionHelper");
var ObjectId = require('mongodb').ObjectID;
function saveCurrentMedicalCondition(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newCurrentMedicalCondition = request.body;
            yield CurrentMedicalConditionHelper_1.CurrentMedicalConditionHelper.create(newCurrentMedicalCondition, result => {
                response.json(result).status(200);
            });
        }
        catch (error) {
            throw (error);
        }
    });
}
exports.saveCurrentMedicalCondition = saveCurrentMedicalCondition;
function removeCurrentMedicalCondition(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let CurrentMedicalConditionId = request.params.id; //send the id as a parameter
            yield CurrentMedicalConditionHelper_1.CurrentMedicalConditionHelper.remove(CurrentMedicalConditionId, result => {
                return response.json(result);
            });
        }
        catch (error) {
            throw (error);
        }
    });
}
exports.removeCurrentMedicalCondition = removeCurrentMedicalCondition;
function getUserMedicalConditionData(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let userId = request.params.userId;
            // console.log("userid on controller" + userId);
            // return response.json(userId).status(200);
            yield CurrentMedicalConditionHelper_1.CurrentMedicalConditionHelper.getMedicationConditionDataUsingUserId(userId, result => {
                return response.json(result).status(200);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.getUserMedicalConditionData = getUserMedicalConditionData;
//# sourceMappingURL=CurrentMedicalConditionController.js.map