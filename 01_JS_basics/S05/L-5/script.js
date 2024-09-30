// 5. Factorial of a Number
// Problem:
// Write a function to calculate the factorial of a given number.

// Explanation:
// The factorial of a number n is the product of all positive integers less than or equal to n.
// E.g., factorial of 5 (5!) is 5 * 4 * 3 * 2 * 1 = 120.
// The function uses recursion, calling itself with n-1 until n reaches 0, where the recursion stops.

function Factorial(num){ // 5
  if(num === 0){
    return 1;
  }else{
    return num * Factorial(num-1)
  }
}

console.log(Factorial(5)); // output: 120


