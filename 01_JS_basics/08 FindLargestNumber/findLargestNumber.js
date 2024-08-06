//  ******************** Question-8 *********************
// Question:
// Write a JavaScript function called findLargestNumber that takes an array of numbers as an argument and returns the largest number in the array.

// Requirements:
// The function should be named findLargestNumber.
// It should accept a single parameter, which is an array of numbers.
// It should return the largest number in the array.

// ********************** Answer-8 ***********************

// ************ method-1 ***********
// function findLargestNumber(arr) {
//     arr = arr.split('')
//     if (arr.length === 0) {
//         return null;
//     }
//     let largest = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i]
//         }
//     }
//     return largest;
// }

alert(findLargestNumber(prompt("enter the array")))

//********** Method-2 ***********

function findLargestNumber(arr) {
    arr = arr.split('');
    if (arr.length === 0) {
        return "empty array";
    }
    let checkArray = arr[0];
    for (const element of arr) {
        if (element > checkArray) {
            checkArray = element;
        }
    }
    return checkArray;
}

console.log(findLargestNumber(prompt("enter the array:")))

