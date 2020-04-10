"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class MedicalFile extends mongoose_1.Document {
    /**Medical File Document Structure 1:N
     *  _id : ObjectId(121221qwqwqw),
     * userID :   ObjectId(23232wewew)
     * fileName : Head Injury scan
     * filePath : s3 file Path
     * date_uploaded :2020-02-13
     * medicalFileType{
     *       "id": 3,
             "name": "CAT-Scan"
     * }
     *
     */
    constructor(userId, medicalFileType, fileName, base64Stringfile, date_uploaded, filePath) {
        super();
        this.userId = userId;
        this.fileName = fileName;
        this.base64Stringfile = base64Stringfile;
        this.date_uploaded = date_uploaded;
        this.filePath = filePath;
        this.medicalFileType = medicalFileType;
    }
    get getStorageId() {
        return this._id;
    }
    set getStorageId(storageId) {
        this._id = storageId;
    }
    /**accessors */
    get getFileName() {
        return this.fileName;
    }
    set setFileName(value) {
        this.fileName = value;
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
exports.MedicalFile = MedicalFile;
//# sourceMappingURL=MedicalFile.js.map