"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OTP {
    /**OTP document structure
     * _id : ObjectId(121221qwqwqw)
     * cellphone : 74232323
     * otp_code : 111111
    */
    constructor(cellphone, otpcode) {
        this.cellphone = cellphone;
        this.otpcode = otpcode;
    }
    get getID() {
        return this._id;
    }
    set setCellphone(cellphone) {
        this.cellphone = cellphone;
    }
    get getCellphone() {
        return this.cellphone;
    }
    set setOtpCode(otpcode) {
        this.otpcode = otpcode;
    }
    get getOtpCode() {
        return this.otpcode;
    }
}
exports.OTP = OTP;
//# sourceMappingURL=OTP.js.map