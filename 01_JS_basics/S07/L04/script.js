// 4. Count Occurrences of a Character in a String
// Problem:
// Write a function that counts how many times a specific character appears in a string.

// Example:
// Input: 'hello world', character: 'o'
// Output: 2

function countOccurrences(str, char){
  let count = 0;
  for(let i = 0; i < str.length; i++){
    if(str[i] === char){
      count++;
    }
  }
  return count;
}

console.log(countOccurrences('hello world', 'w'));