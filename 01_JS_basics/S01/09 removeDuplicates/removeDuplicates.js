//  ******************** Question-9 *********************
// Write a JavaScript function called removeDuplicates that takes an array of numbers as an argument and returns a new array with all duplicate elements removed.

// Requirements:
// The function should be named removeDuplicates.
// It should accept a single parameter, which is the array of numbers.
// It should return a new array with all duplicate elements removed.

// Example Usage:
// console.log(removeDuplicates([1, 2, 3, 1, 2, 4, 5])); // Output: [1, 2, 3, 4, 5]
// console.log(removeDuplicates([5, 5, 5, 5, 5])); // Output: [5]
// console.log(removeDuplicates([1, 2, 3, 4, 5])); // Output: [1, 2, 3, 4, 5]


// ********************** Answer-9 ***********************

function removeDuplicates(arr) {
    let uniqeValue = new Set(arr);
    //console.log(uniqeValue)
    let uniqeArray = [...uniqeValue]
    //console.log(uniqeArray)
    let sortArray = uniqeArray.sort()
    return sortArray
}


console.log(removeDuplicates([1,0,3,1,6,7,8,1, 2, 3, 4, 5, 3, 2]))















