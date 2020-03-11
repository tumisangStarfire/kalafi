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
const UserProfileHelper_1 = require("../databasehelper/UserProfileHelper");
function createUserProfile(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newProfile = request.body;
            yield UserProfileHelper_1.UserProfileHelper.create(newProfile, result => {
                console.log(result);
                return response.json(result).status(200);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.createUserProfile = createUserProfile;
function updateUserProfile(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let id = request.body.id;
            var updateProfile = request.body;
            yield UserProfileHelper_1.UserProfileHelper.update(updateProfile, id, result => {
                console.log(result);
                return response.json(result).status(200);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.updateUserProfile = updateUserProfile;
function updateProfilePicture(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var file = request.body.profilePicture;
            let userId = request.body.userId;
            // console.log(file);
            yield UserProfileHelper_1.UserProfileHelper.uploadProfilePicture(file, userId, result => {
                console.log(result);
                return response.json(result);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.updateProfilePicture = updateProfilePicture;
//# sourceMappingURL=UserProfileController.js.map