// Find the Longest Word in a String
// Problem:
// Write a function that finds the longest word in a given sentence.

// Example:
// Input: 'The quick brown fox jumpss over the lazy dog'
// Output: 'jumps'

function findLongestWord(str) {
  let words = str.split(' ');
  let longest = '';
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;  // longest = 5;
    }
  }
  return longest;
}

console.log(findLongestWord('The quick brown fox jumpss over the lazy dog'))