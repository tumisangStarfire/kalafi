"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Address {
    constructor(region, city, town, village, streetName, houseNumber) {
        this.city = city;
        this.town = town;
        this.village = village;
        this.streetName = streetName;
        this.houseNumber = houseNumber;
        this.region = region;
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
        return this, this.houseNumber;
    }
    set setHouseNumber(houseNumber) {
        this.houseNumber = houseNumber;
    }
}
exports.Address = Address;
//# sourceMappingURL=Address.js.map