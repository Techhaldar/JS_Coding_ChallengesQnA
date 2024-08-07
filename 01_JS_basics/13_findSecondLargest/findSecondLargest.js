//  ******************** Question-13 *********************
// Question: Write a function findSecondLargest that takes an array of numbers and returns the second largest number in the array.

// Requirements:

// The function should be named findSecondLargest.
// It should accept a single parameter, which is an array of numbers.
// It should return the second largest number in the array.
// Example Usage:

// console.log(findSecondLargest([1, 2, 3, 4, 5])); // Output: 4
// console.log(findSecondLargest([10, 20, 30, 40])); // Output: 30

// ********************** Answer-13 ***********************
function findSecondLargest(arr) {
    let largest = -Infinity; 
    let secondLargest = -Infinity;
    arr = arr.split(' ').map(Number);

    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest
            largest = num;
        } else if (num > secondLargest && num < largest) {
            secondLargest = num
        }
    }
    return secondLargest;
}

let userInput = (prompt("enter the number"));

let finalOutput = (findSecondLargest(userInput));

console.log(`Second Largest Number is: ${finalOutput}`)
