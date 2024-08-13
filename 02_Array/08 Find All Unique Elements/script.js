//  ******************** Question-08 *********************
// Question:
// Write a function that finds all unique elements in an array of numbers.

// Requirements:

// Input: An array of numbers with possible duplicates.
// Output: An array of unique numbers.
// Example Usage:
// console.log(findUnique([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

// ********************** Answer-08 ***********************

function findUniqueNumber() {
    const userInput = document.querySelector("#userInput").value;

    // Convert the input string to an array of numbers
    const arr = userInput.split(" ").map(Number);

    // Find unique elements
    const uniqueNumbers = Array.from(new Set(arr));

    // Display the result
    document.querySelector(".output").innerHTML = "Unique numbers: " + uniqueNumbers.join(" ");
}


