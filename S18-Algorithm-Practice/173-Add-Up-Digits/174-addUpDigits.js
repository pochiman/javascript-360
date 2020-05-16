// Solution 1
function addTwoDigits(num) {
  let numArray = num.toString();
  numArray = numArray.split('');
  numArray = numArray.reduce((num1, num2) => parseInt(num1) + parseInt(num2));
  return numArray;
}

console.log(addTwoDigits(29));
console.log(addTwoDigits(48));

// Solution 2
function addTwoDigits2(num) {

  return num.toString().split('').reduce((num1, num2) => parseInt(num1) + parseInt(num2));
}

console.log(addTwoDigits2(29));
console.log(addTwoDigits2(48));
