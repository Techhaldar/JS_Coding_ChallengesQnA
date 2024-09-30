// Check Even or Odd
// Problem:
// Write a function that takes a number as input and checks if it is even or odd.

// Explanation:
// If a number is divisible by 2 without a remainder (num % 2 === 0), it is even.
// If there’s a remainder, it’s odd.

function isEven(num) {
  if (num % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

console.log(isEven(22))

