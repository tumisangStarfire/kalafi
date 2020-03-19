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
const UserHelper_1 = require("../databasehelper/UserHelper");
function checkPhoneNumber(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let cellphone = request.body.cellphone;
            /*  const valid = await User.validateUserPhoneNumber(cellphone, res => {
                 console.log(res);
                 return res;
             }) */
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.checkPhoneNumber = checkPhoneNumber;
function getUser(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let id = request.body.id;
            yield UserHelper_1.UserHelper.getUserById(id, res => {
                console.log(res);
                const user = res;
                response.json(user);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.getUser = getUser;
//# sourceMappingURL=UserController.js.map