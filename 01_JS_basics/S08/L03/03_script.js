// Sum of Digits of a Number
// Problem:
// Write a function that returns the sum of the digits of a number.

// Example:
// Input: 123
// Output: 6 (because 1 + 2 + 3 = 6)

function sumOfDigits(num) {
  let sum = 0; // 3 + 2 + 1 = 6
  while (num) {
    sum = sum + num % 10;  // 123 % 10 = 3 , 12 % 10 = 2
    num = Math.floor(num / 10)  // 123 / 10 = 12.3, 12 / 10 = 1.2
  }
  return sum;
}

console.log(sumOfDigits(123))  // output : 6