//  ******************** Question-05 *********************
// OTP Generator Coding Challenge

// Question: Write a JavaScript function generateOTP that generates a 6-digit One-Time Password (OTP). The OTP should consist of random digits between 0 and 9.

// Requirements:
// The function should return a 6-digit OTP.
// Each OTP should be different for every function call.
// The OTP should only contain numerical digits.

// Example Usage:
// const otp = generateOTP();
// console.log('Generated OTP:', otp);  // Example Output: Generated OTP: 482913

// ********************** Answer-04 ***********************
function OTP () {
    let count = ""
    for(let i = 0; i<4; i++){
        const num = Math.floor(Math.random() * 10)
        count = count + num;
    }
    return `Your OTP is: ${count}`;
}

console.log(OTP())
