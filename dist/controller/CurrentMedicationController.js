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
const CurrentMedicationHelper_1 = require("../databasehelper/CurrentMedicationHelper");
function saveCurrentMedication(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newCurrentMedication = request.body;
            yield CurrentMedicationHelper_1.CurrentMedicationHelper.create(newCurrentMedication, result => {
                response.json(result);
            });
            // const sendOTP =  thorough email or sms
        }
        catch (error) {
            throw (error);
        }
    });
}
exports.saveCurrentMedication = saveCurrentMedication;
function removeCurrentMedication(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let CurrentMedicationId = request.params.id; //send the id as a parameter
            yield CurrentMedicationHelper_1.CurrentMedicationHelper.remove(CurrentMedicationId, result => {
                return response.json(result);
            });
            // const sendOTP =  thorough email or sms
        }
        catch (error) {
            throw (error);
        }
    });
}
exports.removeCurrentMedication = removeCurrentMedication;
function getData(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let userId = request.params.id;
            yield CurrentMedicationHelper_1.CurrentMedicationHelper.getDataUsingUserId(userId, result => {
                return response.json(result);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.getData = getData;
//# sourceMappingURL=CurrentMedicationController.js.map