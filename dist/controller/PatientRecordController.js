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
const PatientRecordService_1 = require("../service/PatientRecordService");
function findUserInjuries(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let id = request.params.userId;
            yield PatientRecordService_1.default.getUserInjuriesUsingUserId(id, res => {
                console.log(res);
                //const user: User = res;
                response.json(res);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.findUserInjuries = findUserInjuries;
exports.findUserIllnesses = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = request.params.userId;
        yield PatientRecordService_1.default.getUserIllnessUsingUserId(id, res => {
            console.log(res);
            //const user: User = res;
            response.json(res);
        });
    }
    catch (error) {
        console.log(error);
    }
});
//# sourceMappingURL=PatientRecordController.js.map