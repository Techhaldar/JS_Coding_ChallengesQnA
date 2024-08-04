// Write a JavaScript function called isPalindrome that takes a string as an argument and returns true if the string is a palindrome, and false otherwise. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

// Requirements:
// The function should be named isPalindrome.
// It should accept a single parameter, which is the string to be checked.
// It should return true if the string is a palindrome, and false otherwise.

function isPalindrome (str){
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    console.log(cleanedStr);
    
    let reversedStr = cleanedStr.split('').reverse().join('');
    console.log(reversedStr)
   
    return cleanedStr === reversedStr;
}

console.log(isPalindrome(prompt("enter your string")))





