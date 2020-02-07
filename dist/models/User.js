export class User {
    constructor(firstName, lastName, email, cellphone, password, status, verified) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.cellphone = cellphone;
        this.password = password;
        this.status = status;
        this.verified = verified;
    }
    get getUserId() {
        return this.id;
    }
    set setUserId(id) {
        this.id = id;
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
}
//# sourceMappingURL=User.js.map