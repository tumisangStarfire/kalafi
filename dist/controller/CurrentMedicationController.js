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
const CurrentMedicationService_1 = require("../service/CurrentMedicationService");
function storeCurrentMedication(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newCurrentMedication = request.body;
            yield CurrentMedicationService_1.default.store(newCurrentMedication, result => {
                response.json(result);
            });
            // const sendOTP =  thorough email or sms
        }
        catch (error) {
            throw (error);
        }
    });
}
exports.storeCurrentMedication = storeCurrentMedication;
function destroyMedication(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let CurrentMedicationId = request.params.id; //send the id as a parameter
            yield CurrentMedicationService_1.default.destroy(CurrentMedicationId, result => {
                return response.json(result);
            });
            // const sendOTP =  thorough email or sms
        }
        catch (error) {
            throw (error);
        }
    });
}
exports.destroyMedication = destroyMedication;
function findUserMedication(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let userId = request.params.userId;
            yield CurrentMedicationService_1.default.getMedicationUsingUserId(userId, result => {
                return response.json(result);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.findUserMedication = findUserMedication;
//# sourceMappingURL=CurrentMedicationController.js.map