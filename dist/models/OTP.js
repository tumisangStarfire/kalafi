"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class OTP extends mongoose_1.Document {
    /**OTP document structure
     * _id : ObjectId(121221qwqwqw)
     * cellphone : 74232323
     * otp_code : 111111
    */
    constructor(cellphone, otpcode, storageId) {
        super();
        this._id = storageId;
        this.cellphone = cellphone;
        this.otpcode = otpcode;
    }
    get getStorageId() {
        return this._id;
    }
    set setStorageId(storageId) {
        this._id = storageId;
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