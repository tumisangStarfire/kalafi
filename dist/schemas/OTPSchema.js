"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.OTPSchema = new mongoose_1.Schema({
    otp_code: { type: Number, required: true },
    cellphone: { type: Number, required: true },
}, { timestamps: true });
//# sourceMappingURL=OTPSchema.js.map