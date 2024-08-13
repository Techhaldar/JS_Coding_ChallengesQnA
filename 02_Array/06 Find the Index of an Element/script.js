//  ******************** Question-06 *********************
// Question:
// Write a function that finds the index of the first occurrence of a given element in an array.

// Requirements:

// Input: An array and an element to search for.
// Output: The index of the element in the array.
// Example Usage:
// console.log(findIndex([1, 2, 3, 4], 3)); // Output: 2

// ********************** Answer-06 ***********************

function idxElement() {
    const UserInput = document.querySelector('#UserInput').value;
    const ElementToFind = document.querySelector('#ElementToFind').value;

    const arr = UserInput.split(' ').map(Number);


    const idx = findElement(arr, Number(ElementToFind));
    document.querySelector('#result').innerText = `index of ${idx}`;
}

function findElement(arr, element) {
    return arr.indexOf(element);
}