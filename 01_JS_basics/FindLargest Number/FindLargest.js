//  ******************** Question-1 *********************
//  Write a JavaScript function called findLargest that takes three numbers as arguments and returns the largest of the three numbers.

//  Requirements:
//  The function should be named findLargest.
//  It should accept three parameters.
//  It should return the largest number among the three.

//  Example Usage:
//  console.log(findLargest(10, 20, 5)); // Output: 20
//  console.log(findLargest(-5, -10, -3)); // Output: -3
//  console.log(findLargest(7, 7, 7)); // Output: 7

// ********************** Answer - 1 ***********************
 function findLargest(a, b, c) {

     if (a >= b && a >= c) {
         return a;
     } else if (b >= a && b >= c) {
         return b;
     } else {
         return c;
     }

 }
 let num1 = parseInt(prompt("enter the first number:"))
 let num2 = parseInt(prompt("enter the second number:"))
 let num3 = parseInt(prompt("enter the third number:"))

 let largest = findLargest(num1, num2, num3);
 console.log(largest);
 