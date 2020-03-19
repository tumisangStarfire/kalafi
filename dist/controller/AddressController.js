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
const AddressHelper_1 = require("databasehelper/AddressHelper");
function updateAddress(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let addresId = request.body.id;
            var address = request.body;
            yield AddressHelper_1.AddressHelper.update(address, addresId, result => {
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
//# sourceMappingURL=AddressController.js.map