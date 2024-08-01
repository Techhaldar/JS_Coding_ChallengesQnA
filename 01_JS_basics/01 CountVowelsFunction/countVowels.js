// ********************* Question - 5  ***************************
// Write a JavaScript function called countVowels that takes a string as an argument and returns the number of vowels in the string.

// Requirements:
// The function should be named countVowels.
// It should accept a single parameter, which is the string to be analyzed.
// It should return the count of vowels in the string (both uppercase and lowercase vowels should be counted).

// ************************ Answer - 5 ****************************

function countVowels (str){
    let count = 0;
    let vowels = "aeiouAEIOU";
    for(let i = 0; i < str.length; i++){
        if(vowels.indexOf(str[i]) !== -1){
            count++;
        }
    }
    return count;
}
console.log(countVowels(prompt()));
