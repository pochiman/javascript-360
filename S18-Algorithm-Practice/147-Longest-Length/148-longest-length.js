// Solution 1
// function longestWordLength(str) {
//   let longestLength = 0;
//   let strArray = str.split(' ');

//   for (let i = 0; i < strArray.length; i++) {
//     if (longestLength < strArray[i].length) {
//       longestLength = strArray[i].length;
//     }
//   }

//   return longestLength;
// }

// console.log(longestWordLength('I am a coding god'));
// console.log(longestWordLength('I would like to work for Google'));
// console.log(longestWordLength("Ain't no fun if the homie don't code none"));

// Solution 2
// function longestWordLength2(str) {
//   let longestLength = 0;
//   let strArray = str.split(' ');

//   for (let i = 0; i < strArray.length; i++) {
//     longestLength = longestLength < strArray[i].length ? strArray[i].length : longestLength;
//   }

//   return longestLength;
// }

// console.log(longestWordLength2('I am a coding god'));
// console.log(longestWordLength2('I would like to work for Google'));
// console.log(longestWordLength2("Ain't no fun if the homie don't code none"));

// Solution 3
// function longestWordLength3(str) {
//   let longestLength = 0;
//   let strArray = str.split(' ');

//   strArray.forEach((word) => {
//     // console.log(word);
//     longestLength = longestLength < word.length ? word.length : longestLength;
//   });

//   return longestLength;
// }

// console.log(longestWordLength3('I am a coding god'));
// console.log(longestWordLength3('I would like to work for Google'));
// console.log(longestWordLength3("Ain't no fun if the homie don't code none"));

// Solution 4
// function longestWordLength4(str) {
//   let longestLength = 0;
//   let strArray = str.split(' ');

//   strArray = strArray.sort((word1, word2) => {
//     return word2.length - word1.length;
//   });

//   // return strArray;
//   return strArray[0].length;
// }

// console.log(longestWordLength4('I am a coding god'));
// console.log(longestWordLength4('I would like to work for Google'));
// console.log(longestWordLength4("Ain't no fun if the homie don't code none"));

// Solution 5
// function longestWordLength5(str) {
//   let longestLength = 0;
//   let strArray = str.split(' ').sort((word1, word2) => {
//     return word2.length - word1.length;
//   });

//   return strArray[0].length;
// }

// console.log(longestWordLength5('I am a coding god'));
// console.log(longestWordLength5('I would like to work for Google'));
// console.log(longestWordLength5("Ain't no fun if the homie don't code none"));

// Solution 6
function longestWordLength6(str) {
  let longestLength = str.split(' ').sort((word1, word2) => {
    return word2.length - word1.length;
  })[0].length;

  return longestLength;
}

console.log(longestWordLength6('I am a coding god'));
console.log(longestWordLength6('I would like to work for Google'));
console.log(longestWordLength6("Ain't no fun if the homie don't code none"));