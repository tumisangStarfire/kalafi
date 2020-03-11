"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.AddressSchema = new mongoose_1.Schema({
    city: { type: String, required: false },
    town: { type: String, required: false },
    village: { type: String, required: false },
    streetName: { type: String, required: false },
    houseNumber: { type: Number, required: false },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'users'
    },
});
//# sourceMappingURL=AddressSchema.js.map