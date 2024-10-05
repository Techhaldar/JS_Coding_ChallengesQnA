// Count the Number of Vowels in a String
// Problem:
// Write a function to count the number of vowels in a given string.

// Example:
// Input: "javascript"
// Output: 3 (because 'a', 'a', and 'i' are vowels)

function countVowels(str) {
  let count = 0;
  let vowels = "iouAEIOaeU";
  for (const letter of str) {
    if (vowels.includes(letter)) {
      count++;
    }

  }
  return count;
}

console.log(countVowels("javascript"))