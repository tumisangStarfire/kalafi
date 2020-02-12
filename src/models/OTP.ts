
import mongoose, { model, Document } from 'mongoose';
import { OTPSchema } from '../schemas/OTPSchema';
export class OTP extends Document {


    _id: string;
    cellphone: number;
    otpcode: number;

    constructor(cellphone: number, otpcode: number) {
        super();
        this.cellphone = cellphone;
        this.otpcode = otpcode;

    }

    get getID(): string {
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
export const OTPModel = model<OTP>('OTP', OTPSchema);