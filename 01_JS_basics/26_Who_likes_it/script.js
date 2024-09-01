//  ******************** Question - 26 *********************

// You probably know the "like" system from Facebook and other social media. People can "like" posts, photos or other items. We want to create the text that should be displayed next to such an item.

// Implement a function that takes an input array, containing the names of people who like an item and returns an output string formatted nicely as shown below.

// const likes = names => {
// // Your solution
//   };

//   console.log(likes([])); // 'no one likes this'
//   console.log(likes(['Peter'])); // 'Peter likes this'
//   console.log(likes(['Jacob', 'Alex'])); // 'Jacob and Alex like this'
//   console.log(likes(['Max', 'John', 'Mark'])); // 'Max, John and Mark like this'
//   console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); // 'Alex, Jacob and 2 others like this'

// ********************** Answer - 26 ***********************

const likes = names => {
    const len = names.length;
    if(len === 0){
        console.log(`No one likes this`);
    } else if(len === 1){
        console.log(`${names[0]} likes this`);
    } else if(len === 2){
        console.log(`${names[0]} ${names[1]} likes this`);
    } else if(len === 3){
        console.log(`${names[0]} ${names[1]} ${names[2]} likes this`);
    } else if(len >= 4){
        console.log(`${names[0]} and ${len-1} others like this`);
    }
};

likes(["ratin", "rohit", "raj", "rohan", "mohit", "rakesh", "arjun", "abhay", "vijay", "rahul"])

