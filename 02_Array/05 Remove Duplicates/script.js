//  ******************** Question-05 *********************

// Question:
// Write a function that removes duplicate values from an array and returns a new array with only unique values.

// Requirements:

// Input: An array with possible duplicate values.
// Output: A new array with unique values only.
// Example Usage:.
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

// ********************** Answer-05 ***********************


function duplicateNum () {
    const inputNumbers = document.querySelector('#inputNumbers').value;

    const unique = uniqueValue(inputNumbers)

    document.querySelector('.result').innerText = unique;

}

function uniqueValue(arr){
   return [...new Set(arr)];
   
}