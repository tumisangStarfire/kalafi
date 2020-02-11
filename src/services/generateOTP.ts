import { str } from "envalid";
var shuffledString = ('./shuffledString.js')
//generate otp code  
/* import {
    str_shuffle
} from "./str_shuffle"; */

export function generateOTP() {
    // generate a otp based on 6 digits + 
    let optCode = Math.floor(100000 + Math.random() * 900000);
    //shuffle the result  
    // var shuffled_code = shuffledString.;//str_shuffle(optCode); 
    console.log(optCode);
    return optCode
}

