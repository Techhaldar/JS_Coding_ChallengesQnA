// Reverse a String
// Problem:
// Write a function that takes a string and returns the reversed version of the string.

// Explanation:
// To reverse a string, first convert it into an array of characters using .split('').
// Then reverse the array using .reverse().
// Finally, join the reversed array back into a string using .join('').

function reverseString(str){ // ratin
  return str.split('').reverse().join(''); // 'r' 'a'
}

console.log(reverseString("ratin"));