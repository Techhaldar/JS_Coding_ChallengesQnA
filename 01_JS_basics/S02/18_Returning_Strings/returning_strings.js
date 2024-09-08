//  ******************** Question - 17 *********************

// Write a function that given the input string name, returns the greeting statement Hello, <name> how are you doing today?

// const greet = name => {
//     //Your solution
//   };
  
//   console.log(greet('Ryan')); // "Hello, Ryan what are you doing today?"
//   console.log(greet('Sara')); // "Hello, Sara what are you doing today?"

// ********************** Answer - 17 ***********************

const greet = name => {
    return `Hello, ${name} what are you doing today?`
}

console.log(greet("arjun"));