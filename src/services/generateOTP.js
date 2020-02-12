//generate otp code  
//

function generateOTP() {
    // generate a otp based on 6 digits + 
    let optCode = Math.floor(100000 + Math.random() * 900000);
    //shuffle the result  
    ///var shuffled_code = str_shuffle(optCode);
    console.log(optCode);
    return optCode;
}

module.exports = generateOTP;