// ********************* Question - 2  **********************

// Question-2:
// Write a JavaScript function called isPrime that takes a single number as an argument and returns true if the number is a prime number and false otherwise.

// Requirements:
// The function should be named isPrime.
// It should accept a single parameter.
// It should return true if the number is prime and false otherwise.

// ************************ Answer - 2 ************************
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let number = parseInt(prompt("enter the number:"));
let result = isPrime(number);

console.log(`Is number Prime? ${result}`);

