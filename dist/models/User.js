"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcrypt = require("bcrypt");
/*constants */
var Status;
(function (Status) {
    Status[Status["Non_Active"] = 0] = "Non_Active";
    Status[Status["Active"] = 1] = "Active";
    Status[Status["Suspended"] = 2] = "Suspended";
})(Status || (Status = {}));
/** a class */
class User extends mongoose_1.Document {
    /** user document structure
     *  _id = ObjectId(121221qwqwqw) ,
     * firstName : John [required],
     * lastName : Doe [required],
     * cellphone : 76221221 , [required]
     * password : 1221221 [required]
     * email : johndoe.mail.com, optional
     * status : 0
     * verified : false
     *
     */
    constructor(firstName, lastName, cellphone, password, email, status, verified, userId) {
        super();
        this._id = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.cellphone = cellphone;
        this.password = password;
        this.email = email;
        this.status = status;
        this.verified = verified;
        /*initialize the timestamp when saving the documennt*/
        this.created_at = Date.now().toString();
    }
    get getUserId() {
        return this._id;
    }
    set setUserId(_id) {
        this._id = _id;
    }
    get getFirstName() {
        return this.firstName;
    }
    set setFirstName(firstName) {
        this.firstName = firstName;
    }
    get getLastName() {
        return this.lastName;
    }
    set setLastName(lastName) {
        this.lastName = lastName;
    }
    get getEmail() {
        return this.email;
    }
    set setEmail(email) {
        this.email = email;
    }
    get getPassword() {
        return this.password;
    }
    set setPassword(password) {
        this.password = password;
    }
    get getCellphone() {
        return this.cellphone;
    }
    set setCellphone(cellphone) {
        this.cellphone = cellphone;
    }
    get getStatus() {
        return this.status;
    }
    set setStatus(status) {
        this.status = status;
    }
    get getVerifified() {
        return this.verified;
    }
    set setVerified(verified) {
        this.verified = verified;
    }
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }
    checkIfUnencryptedPasswordIsValid(unencryptedPassword) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
    }
    static checkIfPasswordAndConfirmPasswordMatch(password, confirmPassword) {
        if (password === confirmPassword)
            return true;
        else
            return false;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map