//  ******************** Question-04 *********************
// Question:
// Write a function that takes an array and returns a new array with the elements in reverse order.

// Requirements:

// Input: An array of any data type.
// Output: A new array with the elements in reverse order.
// Example Usage:
// console.log(reverseArray([1, 2, 3, 4])); // Output: [4, 3, 2, 1]


// ********************** Answer-04 ***********************


function reverseNum () {
    const inputNumbers = document.querySelector('#inputNumbers').value;

    const arrayNum = inputNumbers.split(' ').map(Number);

    const reverse = minValue(arrayNum);

    document.querySelector('.result').innerText = `Reverse of number: ${reverse}`;
};
function minValue(value){
    let num = [0];
    if(value.length === 0){
        return 'No numbers provided';
    }
    const reverseNumber =  value.slice().reverse();
    console.log(reverseNumber)
    reverseNumber.sort();
    return reverseNumber;
}
