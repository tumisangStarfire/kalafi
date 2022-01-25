import Address from "./Address";


export default class Pharmacy {

    private name : string;
    private address : Address 

    constructor(name : string, address : Address){
        this.name = name,
        this.address = address;
    }
}