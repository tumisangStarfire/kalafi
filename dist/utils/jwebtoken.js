"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require('dotenv');
dotenv.config();
exports.JWT_SECRET_KEY = process.env.JWT_SECRET;
if (!exports.JWT_SECRET_KEY) {
    console.log("No JWT secret string. Set JWT_SECRET environment variable.");
    process.exit(1);
}
//# sourceMappingURL=jwebtoken.js.map