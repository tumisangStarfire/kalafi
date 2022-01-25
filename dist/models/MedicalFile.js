"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MedicalFile {
    constructor(_id, userId, medicalFileType, name, base64Stringfile, date_uploaded, filePath) {
        this._id = _id;
        this.userId = userId;
        this.name = name;
        this.base64Stringfile = base64Stringfile;
        this.date_uploaded = date_uploaded;
        this.filePath = filePath;
        this.medicalFileType = medicalFileType;
    }
    get getId() {
        return this._id;
    }
    set getId(_id) {
        this._id = _id;
    }
    /**accessors */
    get getFileName() {
        return this.name;
    }
    set setFileName(name) {
        this.name = name;
    }
    get getfilePath() {
        return this.filePath;
    }
    set setFilePath(filePath) {
        this.filePath = filePath;
    }
    get getDateUploaded() {
        return this.date_uploaded;
    }
    set setDateUploaded(date_uploaded) {
        this.date_uploaded = date_uploaded;
    }
    get getBase64File() {
        return this.base64Stringfile;
    }
    set setBase54File(base64Stringfile) {
        this.base64Stringfile = base64Stringfile;
    }
}
exports.default = MedicalFile;
//# sourceMappingURL=MedicalFile.js.map