"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
/*constants */
var Status;
(function (Status) {
    Status[Status["Non_Active"] = 0] = "Non_Active";
    Status[Status["Active"] = 1] = "Active";
    Status[Status["Suspended"] = 2] = "Suspended";
})(Status || (Status = {}));
/** a class */
class User {
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
    constructor(_id, firstName, lastName, cellphone, password, email, status, profile, verified, created_at, updated_at) {
        this._id = _id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.cellphone = cellphone;
        this.password = password;
        this.email = email;
        this.status = status;
        this.profile = profile;
        this.verified = verified;
        /*initialize the timestamp when saving the documennt*/
        this.created_at = created_at,
            this.updated_at = updated_at;
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
    get getProfile() {
        return this.profile;
    }
    set setProfile(profile) {
        this.profile = profile;
    }
    get getVerifified() {
        return this.verified;
    }
    set setVerified(verified) {
        this.verified = verified;
    }
    set setCreatedAt(created_at) {
        this.created_at = new Date();
    }
    set setUpdatedAt(updated_at) {
        this.updated_at = new Date();
    }
    static hashPassword(password) {
        return bcrypt.hashSync(password, 8);
    }
    static checkIfUnencryptedPasswordIsValid(unencryptedPassword, password) {
        return bcrypt.compareSync(unencryptedPassword, password);
    }
    static checkIfPasswordAndConfirmPasswordMatch(password, confirmPassword) {
        if (password === confirmPassword)
            return true;
        else
            return false;
    }
}
exports.default = User;
//# sourceMappingURL=User.js.map