// Palindrome Check
// Problem:
// Write a function to check if a given string is a palindrome (reads the same forward and backward).

// Explanation:
// Reverse the string using the same method as question 6.
// Compare the original string with its reversed version. If they are the same, it’s a palindrome.

function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");

  if (str === reversed) {
    console.log("string is Palindrome");
  } else {
    console.log("string is not Palindrome");
  }
}

// isPalindrome("151")
isPalindrome("ratin")