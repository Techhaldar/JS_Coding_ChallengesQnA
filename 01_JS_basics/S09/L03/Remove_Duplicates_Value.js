// Write a function to remove duplicate elements from an array without using Set

function removeDuplicates(arr) {
  let uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }

  }
  return uniqueArray;
}

console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 0, 4, 6, -1, 10, 5, 3, 1]))