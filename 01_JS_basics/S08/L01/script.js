// Remove All Falsy Values from an Array
// Problem:
// Write a function to remove all falsy values (e.g., 0, false, null, undefined, NaN, and "") from an array.

// Example:
// Input: [0, 1, false, 2, '', 3, 'a', NaN, 'e', undefined, 4]
// Output: [1, 2, 3, 'a', 'e', 4]

function removeFalsyValues(arr) {
  return arr.filter(Boolean); // 0 and 1 
}

console.log(removeFalsyValues([0, 1, 'ratin', false, 2, '', 3, 'a', NaN, 'e', undefined, 4]));