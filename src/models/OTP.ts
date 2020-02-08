import { databaseConnector } from '../database/databaseConnector';

export class OTP {

   
    private id?: number;
    private cellphone: string;
    private otpcode: number;

    constructor(cellphone: string, otpcode: number) {
        this.cellphone = cellphone;
        this.otpcode = otpcode;
    }

    set setCellphone(cellphone: string) {
        this.cellphone = cellphone;
    }

    get getCellphone(): string {
        return this.cellphone;
    }
    set setOtpCode(otpcode: number) {
        this.otpcode = otpcode;
    }
    get getOtpCode(): number {
        return this.otpcode;
    }



}