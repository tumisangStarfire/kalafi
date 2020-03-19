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
const IllnessHelper_1 = require("../databasehelper/IllnessHelper");
/** create the illness  */
function createIllness(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var newIllness = request.body; /** reqeust body sent  */
            yield IllnessHelper_1.IllnessHelper.create(newIllness, result => {
                console.log(result);
                response.json(result);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.createIllness = createIllness;
/** get users Illness data */
function userIllnessData(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var userId = request.params.userId;
            yield IllnessHelper_1.IllnessHelper.getUserIllnessDataUsingUserId(userId, result => {
                console.log(result);
                response.json(result);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.userIllnessData = userIllnessData;
/** remove the illness */
function deleteIllness(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var illnessId = request.params.id; //send the id as a parameter
            yield IllnessHelper_1.IllnessHelper.remove(illnessId, result => {
                console.log(result);
                response.json(result);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.deleteIllness = deleteIllness;
function getAPIIllness(request, response) {
    try {
        var result = IllnessHelper_1.IllnessHelper.illnessApi(res => {
            var strings = ["transmission", "diagnosis", "treatment", "prevention"];
            let data = res.data;
            var cleanUp = JSON.stringify(data);
            cleanUp.replace('\n\t', '');
            return response.json(data.diseases);
        });
    }
    catch (error) {
        console.log(error);
    }
}
exports.getAPIIllness = getAPIIllness;
//# sourceMappingURL=IllnessController.js.map