"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class Address extends mongoose_1.Document {
    constructor(userId, region, storageId, city, town, village, streetName, houseNumber, ward) {
        super();
        this._id = storageId;
        this.userId = userId;
        this.city = city;
        this.town = town;
        this.village = village;
        this.streetName = streetName;
        this.houseNumber = houseNumber;
        this.ward = ward;
        this.region = region;
    }
    get getStorageId() {
        return this._id;
    }
    set getStorageId(storageId) {
        this._id = storageId;
    }
    get getUserId() {
        return this.userId;
    }
    set setUserId(userId) {
        this.userId = userId;
    }
    get getCity() {
        return this.city;
    }
    set setCity(city) {
        this.city = city;
    }
    get getTown() {
        return this.town;
    }
    set setTown(town) {
        this.town = town;
    }
    get getVillage() {
        return this.village;
    }
    set setVillage(village) {
        this.village = village;
    }
    get getStreetName() {
        return this.streetName;
    }
    set setStreetName(streetName) {
        this.streetName = streetName;
    }
    get getHouseNumber() {
        return this.houseNumber;
    }
    set setHouseNumber(houseNumber) {
        this.houseNumber = houseNumber;
    }
    get getWard() {
        return this.ward;
    }
    set setWard(ward) {
        this.ward = ward;
    }
}
exports.Address = Address;
//# sourceMappingURL=Address.js.map