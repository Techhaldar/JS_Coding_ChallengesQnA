//  ********************* Question - 3  **********************

//  Write a JavaScript function called reverseString that takes a string as an argument and returns the reversed version of the string.

//  Requirements:
//  The function should be named reverseString.
//  It should accept a single parameter, which is the string to be reversed.
//  It should return the reversed string.

//  ************************ Answer - 3 ************************

// **************************  Method-1 *******************************
//  function reverseString(str){
//      let reverseStr = "";
//      for(let i= str.length - 1; i>=0; i--){
//          reverseStr = reverseStr + str[i];
//      }
//      return reverseStr;
//  }

//  let userInput = prompt("enter the string to reverse");
//  let finalOutput = reverseString(userInput);

//  alert(finalOutput);

// ****************************  Method-2  ******************************

// function reverseString(str) {
//     let splitstring = str.split('');
//     let reverseArray = splitstring.reverse('')
//     let joinArray = reverseArray.join('')
//     return joinArray;
// }

// console.log(reverseString("ratin"))

// shortHandCode
// function reverseString (str) {
//     let reverseStr = str.split('').reverse('').join('')
//     return reverseStr;
// }

// console.log(reverseString(prompt("enter the string:")))



