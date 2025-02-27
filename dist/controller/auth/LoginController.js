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
// DB
function login(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //TODO login with cellphone and password  
            const email = request.body.email;
            const password = request.body.password;
            yield UserService_1.default.login(email, password, result => {
                console.log(result);
                return response.json(result).status(result.code);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.login = login;
//# sourceMappingURL=LoginController.js.map