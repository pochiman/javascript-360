// Solution 1
function repeatString(str, num) {
  let repeatedString = '';

  while (num > 0) {
    // repeatedString = repeatedString.concat(str);
    repeatedString += str;
    num--;
  }

  return repeatedString;
}

console.log(repeatString('codinggod', 2));
console.log(repeatString('google', 3));

// Solution 2
function repeatString2(str, num) {
  return str.repeat(num);
}

console.log(repeatString2('codinggod', 2));
console.log(repeatString2('google', 3));
