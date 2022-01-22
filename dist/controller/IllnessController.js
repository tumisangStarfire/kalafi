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
const IllnessService_1 = require("../service/IllnessService");
/** create the illness  */
exports.store = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var newIllness = request.body; /** reqeust body sent  */
        yield IllnessService_1.default.create(newIllness, result => {
            console.log(result);
            response.json(result);
        });
    }
    catch (error) {
        console.log(error);
    }
});
/** get users Illness data */
exports.findOne = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var userId = request.params.userId;
        yield IllnessService_1.default.getIllnessById(userId, result => {
            console.log(result);
            response.json(result);
        });
    }
    catch (error) {
        console.log(error);
    }
});
/** remove the illness */
exports.destroy = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var illnessId = request.params.id; //send the id as a parameter
        yield IllnessService_1.default.remove(illnessId, result => {
            console.log(result);
            response.json(result);
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.findAll = (request, response) => {
    try {
        var result = IllnessService_1.default.illnessApi(res => {
            let data = res.data;
            var cleanUp = JSON.stringify(data);
            cleanUp.replace('\n\t', '');
            return response.json(data.diseases);
        });
    }
    catch (error) {
        console.log(error);
    }
};
//# sourceMappingURL=IllnessController.js.map