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
const InjuryHelper_1 = require("../databasehelper/InjuryHelper");
/** create the injury  */
function createInjury(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var newInjury = request.body; /** request body sent from client */
            yield InjuryHelper_1.InjuryHelper.create(newInjury, result => {
                console.log(result);
                response.json(result);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.createInjury = createInjury;
/** get users Injury data */
function userInjuryData(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var userId = request.params.userId;
            yield InjuryHelper_1.InjuryHelper.getUserInjuriesUsingUserId(userId, result => {
                console.log(result);
                response.json(result);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.userInjuryData = userInjuryData;
/** remove the injury */
function deleteInjury(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var injuryId = request.params.id; //send the id as a parameter
            yield InjuryHelper_1.InjuryHelper.remove(injuryId, result => {
                console.log(result);
                response.json(result);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.deleteInjury = deleteInjury;
//# sourceMappingURL=InjuryController.js.map