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
const InjuryService_1 = require("../service/InjuryService");
/** create the injury  */
exports.store = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var newInjury = request.body; /** request body sent from client */
        yield InjuryService_1.default.create(newInjury, result => {
            console.log(result);
            response.json(result);
        });
    }
    catch (error) {
        console.log(error);
    }
});
/**get all injuries */
exports.findAll = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield InjuryService_1.default.getAllInjuryData(result => {
            console.log(result);
            response.json(result);
        });
    }
    catch (error) {
        console.log(error);
    }
});
/** remove the injury */
exports.destroy = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var injuryId = request.params.id; //send the id as a parameter
        yield InjuryService_1.default.remove(injuryId, result => {
            console.log(result);
            response.json(result);
        });
    }
    catch (error) {
        console.log(error);
    }
});
//# sourceMappingURL=InjuryController.js.map