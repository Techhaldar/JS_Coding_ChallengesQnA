// 3. Find Maximum of Two Numbers
// Problem:
// Write a function that takes two numbers and returns the maximum.

// Explanation:
// Use an if-else condition to compare a and b. Return whichever is greater.

function maxOfTwoNumbers(a, b){
  if(a > b){
    return a;
  }else{
    return b;
  }
};

console.log(maxOfTwoNumbers(5, 8)) // output : 8