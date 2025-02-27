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
const UserService_1 = require("../../service/UserService");
function register(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newUser = request.body;
            var createUser = yield UserService_1.default.create(newUser, result => {
                console.log(result);
                return response.json(result).status(200);
            });
        }
        catch (error) {
            response.json(error);
        }
    });
}
exports.register = register;
function registerBeta(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newUser = request.body;
            var createUser = yield UserService_1.default.registerBetaUser(newUser, result => {
                console.log(result);
                return response.json(result).status(200);
            });
        }
        catch (error) {
            response.json(error);
        }
    });
}
exports.registerBeta = registerBeta;
//# sourceMappingURL=RegisterController.js.map