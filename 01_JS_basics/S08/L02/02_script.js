// Check if a Number is Even or Odd
// Problem:
// Write a function to check if a number is even or odd.

// Example:
// Input: 7
// Output: "Odd"

// Method - 1
function isEvenOrOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

let finalOutput = isEvenOrOdd(8) // Output : Odd

console.log(`Your number is : ${finalOutput}`);