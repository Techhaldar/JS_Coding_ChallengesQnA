// Count Vowels in a String
// Problem:
// Write a function that counts the number of vowels (a, e, i, o, u) in a string.

// Explanation:
// Define a string vowels that contains all vowel characters.
// Loop through each character in the input string, and check if it’s present in the vowels string using includes().


function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (const r of str) {
    if (vowels.includes(r)) {
      count++; // count = count + 1;
    }
  }
  return count;
}

console.log(countVowels("ratin haldar")) // output : 4
