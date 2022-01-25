"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envalid_1 = require("envalid");
//ensure that program only runs when all of its environment dependencies are met 
function validateEnv() {
    envalid_1.cleanEnv(process.env, {
        MONGO_Url: envalid_1.str(),
        MONGO_DATABASE: envalid_1.str(),
        MONGO_USER: envalid_1.str(),
        MONGO_PASSWORD: envalid_1.str(),
        PORT: envalid_1.port(),
        NODE_ENV: envalid_1.str(),
    });
}
exports.validateEnv = validateEnv;
//# sourceMappingURL=validateENV.js.map