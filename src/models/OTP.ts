import { Document } from "mongoose";
export class OTP extends Document {

     _id: string;
    private cellphone: number;
    private otpcode: number;

    /**OTP document structure  
     * _id : ObjectId(121221qwqwqw)  
     * cellphone : 74232323 
     * otp_code : 111111
    */
    constructor(cellphone: number, otpcode: number,storageId?:string) {
        super();
        this._id= storageId;
        this.cellphone = cellphone;
        this.otpcode = otpcode;

    } 

    get getStorageId(): string {
        return this._id;
      }
        
    set setStorageId(storageId: string) {
        this._id = storageId;
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
