"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    cellphone: { type: Number, required: true, unique: true },
    password: { type: String, required: true },
    status: { type: Number, default: 0 },
    verified: { type: Boolean, required: false }
}, { timestamps: true });
//# sourceMappingURL=UserSchema.js.map