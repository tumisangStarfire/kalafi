//generate otp code  
import {
    str_shuffle
} from "./str_shuffle";

generateOTP = callback => {
    // generate a otp based on 6 digits + 
    let optCode = Math.floor(100000 + Math.random() * 900000);
    //shuffle the result  
    var shuffled_code = str_shuffle(optCode);
    console.log(shuffled_code);
    return callback(shuffled_code);
}

module.exports = generateOTP;