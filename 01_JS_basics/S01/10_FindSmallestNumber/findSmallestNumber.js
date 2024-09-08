//  ******************** Question-10 *********************
// Write a JavaScript function called findSmallestNumber that takes an array of numbers as an argument and returns the smallest number in the array.

// Requirements:
// The function should be named findSmallestNumber.
// It should accept a single parameter, which is the array of numbers.
// It should return the smallest number in the array.

// Example Usage:
// console.log(findSmallestNumber([5, 3, 9, 1, 7])); // Output: 1
// console.log(findSmallestNumber([10, 20, -5, 30, 15])); // Output: -5
// console.log(findSmallestNumber([7, 8, 9])); // Output: 7


// ********************** Answer-10 **********************
// smallest
function findSmallestNumber(arr) {
    let checkArray = arr[0]
    for (const element of arr) {
        if (element < checkArray) {
            checkArray = element
        }
    }
    return checkArray;
}
console.log(findSmallestNumber([0, -2, 1, 4, -117, 9]))


