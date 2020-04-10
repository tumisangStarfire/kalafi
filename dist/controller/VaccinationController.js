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
const VaccinationHelper_1 = require("../databasehelper/VaccinationHelper");
function createUserVaccination(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var newVaccination = request.body;
            yield VaccinationHelper_1.VaccinationHelper.create(newVaccination, result => {
                console.log(result);
                response.json(result);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.createUserVaccination = createUserVaccination;
function removeUserVaccination(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var vaccinationId = request.params.id;
            yield VaccinationHelper_1.VaccinationHelper.remove(vaccinationId, result => {
                console.log(result);
                response.json(result);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.removeUserVaccination = removeUserVaccination;
function getAllVaccines(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield VaccinationHelper_1.VaccinationHelper.getAllVaccines(result => {
                console.log(result);
                response.json(result);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.getAllVaccines = getAllVaccines;
function getUserVaccines(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userId = request.params.userId;
            yield VaccinationHelper_1.VaccinationHelper.getAllUserVaccineData(userId, result => {
                console.log(result);
                response.json(result);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.getUserVaccines = getUserVaccines;
//# sourceMappingURL=VaccinationController.js.map