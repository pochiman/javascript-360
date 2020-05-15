// Solution 1
function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  }

  return '';
}

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(4));

// Solution 2
function fizzBuzz2(num) {
  let word = '';

  if (num % 3 === 0) {
    word = word.concat('fizz');
  }

  if (num % 5 === 0) {
    word = word.concat('buzz');
  }

  return word;
}

console.log(fizzBuzz2(3));
console.log(fizzBuzz2(5));
console.log(fizzBuzz2(15));
console.log(fizzBuzz2(4));
