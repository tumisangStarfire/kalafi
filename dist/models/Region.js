"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Region {
    constructor(_id, name) {
        this._id = _id;
        this.name = name;
    }
    get getId() {
        return this._id;
    }
    set getId(_id) {
        this._id = _id;
    }
    get getRegionId() {
        return this._id;
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
}
exports.default = Region;
//# sourceMappingURL=Region.js.map