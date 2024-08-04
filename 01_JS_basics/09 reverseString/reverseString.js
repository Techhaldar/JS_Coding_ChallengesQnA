//  ******************** Question-9 *********************
// Question:
// Write a JavaScript function called reverseString that takes a string as an argument and returns the reversed version of the string.

// Requirements:
// The function should be named reverseString.
// It should accept a single parameter, which is the string to be reversed.
// It should return the reversed version of the string.

// ********************** Answer-9 ***********************
function reverseString(str) {
    let reversed = str.split('').reverse().join('');
    return reversed
}

console.log(reverseString(prompt("enter the string:")))