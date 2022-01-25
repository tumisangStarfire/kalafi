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
const uuid = require('uuid');
var path = require('path');
const fs = require('fs');
exports.createFile = (filename, base64String, fileExtension, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var systemUploadPath = path.normalize(process.cwd() + '/src/public/img/');
        // Remove header
        let base64Image = base64String.split(';base64,').pop();
        /**convert the string from base 64 */
        var bitmap = new Buffer(base64Image, 'base64');
        /* write path on the system */
        var writePath = systemUploadPath + filename + fileExtension;
        var writeFile = yield fs.writeFileSync(writePath, bitmap, function (err) {
            if (err) {
                console.log(err);
            }
        });
        return callback(writePath);
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteFileAfterUpload = (filePath) => {
    const deleteFile = fs.unlink(filePath, function (err) {
        if (err) {
            console.log(err);
        }
        console.log('File deleted!');
    });
};
//# sourceMappingURL=FileCreaterController.js.map