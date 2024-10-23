// Question: Reverse a String
// Write a function that takes a string as input and returns the string reversed.

// Example:
// Input: "hello"

// Output: "olleh"

// Input: "JavaScript"

// Output: "tpircSavaJ"


function reverseSting(str) {
  return str.split('').reverse().join('');
}

console.log(reverseSting("hello"));