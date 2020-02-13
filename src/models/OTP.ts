import { ObjectId } from "mongodb";
export class OTP {


    private _id: ObjectId;
    private cellphone: number;
    private otpcode: number;

    /**OTP document structure  
     * _id : ObjectId(121221qwqwqw)  
     * cellphone : 74232323 
     * otp_code : 111111
    */
    constructor(cellphone: number, otpcode: number) {

        this.cellphone = cellphone;
        this.otpcode = otpcode;

    }

    get getID(): ObjectId {
        return this._id;
    }

    set setCellphone(cellphone: number) {
        this.cellphone = cellphone;
    }

    get getCellphone(): number {
        return this.cellphone;
    }
    set setOtpCode(otpcode: number) {
        this.otpcode = otpcode;
    }
    get getOtpCode(): number {
        return this.otpcode;
    }


}
