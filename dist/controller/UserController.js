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
//post function
function checkPhoneNumber(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let cellphone = request.body.cellphone;
            const valid = yield UserHelper_1.UserHelper.verifyUserCellphone(cellphone, res => {
                console.log(res);
                return res;
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.checkPhoneNumber = checkPhoneNumber;
//post function
function createUserPassword(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let userId = request.body.userId;
            let password = request.body.password;
            let confirmPassword = request.body.confirmPassword;
            const result = yield UserHelper_1.UserHelper.createPassword(userId, password, confirmPassword, res => {
                console.log(res);
                return res;
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.createUserPassword = createUserPassword;
function resetPassword(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let userId = request.body.userId;
            let password = request.body.password;
            let confirmPassword = request.body.confirmPassword;
            const result = yield UserHelper_1.UserHelper.resetPassword(userId, password, confirmPassword, res => {
                console.log(res);
                return res;
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.resetPassword = resetPassword;
//get function
function getUser(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let id = request.params.userId;
            yield UserHelper_1.UserHelper.getUserById(id, res => {
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
exports.getUser = getUser;
//# sourceMappingURL=UserController.js.map