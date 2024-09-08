//  ******************** Question - 21 *********************

// Vowel Count
// Return the number (count) of vowels (a, e, i, o, u) in the given string. The input string will only consist of lower case letters and/or spaces.

// const getCount = str => {
//     // Your solution
//   };

//   console.log(getCount('my pyx')); // 0
//   console.log(getCount('pear tree')); // 4
//   console.log(getCount('abracadabra')); // 5
//   console.log(getCount('o a kak ushakov lil vo kashu kakao')); // 13

// ********************** Answer - 21 ***********************

const getCount = str => {
    count = 0;
    for (const element of str) {
        if (element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u') {
            count++;
        }
    }
    return count;
};
console.log(getCount("ratin haldar"));