//  ******************** Question-11 *********************
// Write a JavaScript function called findLongestWord that takes a string as an argument and returns the longest word in the string. If there are multiple words with the same maximum length, return the first one.

// Requirements:
// The function should be named findLongestWord.
// It should accept a single parameter, which is the string to be checked.
// It should return the longest word in the string.

// ********************** Answer-11 ***********************
// Largest word
function findLongestWord(str) {
    let words = str.split(' ');
    let longestWord = '';
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
console.log(findLongestWord(prompt("Enter the string:")));