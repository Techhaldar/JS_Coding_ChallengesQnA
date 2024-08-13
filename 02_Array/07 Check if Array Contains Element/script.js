//  ******************** Question-07 *********************
// Question:
// Write a function that checks if an array contains a specific element.

// Requirements:

// Input: An array and an element to check.
// Output: true if the element is present, otherwise false.
// Example Usage:
// console.log(contains([1, 2, 3, 4], 3)); // Output: true
// console.log(contains([1, 2, 3, 4], 5)); // Output: false

// ********************** Answer-07 ***********************

function idxElement() {
    const UserInput = document.querySelector('#UserInput').value;
    const ElementToFind = document.querySelector('#ElementToFind').value;

    const arr = UserInput.split(' ').map(Number);


    const idx = findElement(arr, Number(ElementToFind));
    document.querySelector('#result').innerText = `${idx}`;
}

function findElement(arr, element) {
    return arr.includes(element);
}
