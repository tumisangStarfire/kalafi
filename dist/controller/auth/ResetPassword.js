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
// DB
//outside the application
exports.forgotpassword = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //user clicks reset password from login page,users enters cellphone number, application verifies the cellphone number 
        //after verification is successfull application sends OTP code, user enters their OTP code,mobile App redirects to reset password page, user enters new password, re enter password. 
        //after changing password application Logins in. 
        var cellphone = request.body.cellphone;
        var otp_code = request.body.otp_code;
        var password = request.body.password;
        let query = '';
    }
    catch (error) {
        console.log(error);
    }
});
//inside the application
exports.resetpasssword = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
});
//# sourceMappingURL=ResetPassword.js.map