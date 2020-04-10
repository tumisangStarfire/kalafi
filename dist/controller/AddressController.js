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
const AddressHelper_1 = require("../databasehelper/AddressHelper");
//post
function updateAddress(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let storageId = request.body.storageId;
            var address = request.body;
            yield AddressHelper_1.AddressHelper.update(address, storageId, result => {
                console.log(result);
                response.json(result).status(200);
            });
        }
        catch (error) {
            console.log('request error:', error);
        }
    });
}
exports.updateAddress = updateAddress;
//post
function createAddress(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const address = request.body;
            var result = yield AddressHelper_1.AddressHelper.create(address, res => {
                return res;
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.createAddress = createAddress;
//get 
function getUserAddress(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let userId = request.params.userId;
            var result = yield AddressHelper_1.AddressHelper.getUserAddress(userId, res => {
                return res;
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.getUserAddress = getUserAddress;
//# sourceMappingURL=AddressController.js.map