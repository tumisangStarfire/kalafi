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
const UserAllergyHelper_1 = require("../databasehelper/UserAllergyHelper");
/** create the allergey post */
function createAllergy(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var newUserAllergy = request.body; /** request body sent from client */
            yield UserAllergyHelper_1.UserAllergyLogic.create(newUserAllergy, result => {
                console.log(result);
                response.json(result);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.createAllergy = createAllergy;
/** remove the users allergy */
function removeAllergy(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var allergyId = request.params.id; //send the id as a parameter
            yield UserAllergyHelper_1.UserAllergyLogic.remove(allergyId, result => {
                console.log(result);
                response.json(result);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.removeAllergy = removeAllergy;
//# sourceMappingURL=UserAllergyController.js.map