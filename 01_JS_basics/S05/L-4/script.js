// 4. Check if a Number is Positive or Negative
// Problem:
// Write a function that checks if a number is positive, negative, or zero.

// Explanation:
// If num > 0, the number is positive.
// If num < 0, the number is negative.
// If neither, it’s zero.

function checkNumber(num){
  if(num > 0){
    return 'Positive';
  }else if(num < 0){
    return 'Negative';
  }else{
    return 'Zero';
  }
}

console.log(checkNumber(11));
