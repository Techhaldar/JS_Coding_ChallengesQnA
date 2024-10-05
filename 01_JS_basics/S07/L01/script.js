// 1. Remove Duplicates from an Array
// Problem:
// Write a function that removes all duplicate values from an array.

// Example:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

// function removesDuplicates(xyz) {
//   return [...new Set(xyz)]
// }

// console.log(removesDuplicates([1, 2, 2, 3, 4, 4, 5]));

// without using set

function removesDuplicates(arr){
  let uniqueArray = [];

  for(let i = 0; i < arr.length; i++){
    if(!uniqueArray.includes(arr[i])){
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}
console.log(removesDuplicates([1, 2, 2, 3, 4, 4, 5]));