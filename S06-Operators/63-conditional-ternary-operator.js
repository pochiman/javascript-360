function addTwoNumbers(a, b) {
  // let example = a > b ? 'a' : 'b';
  // let example = a > b ? 'a' : (4 > 5) ? true : false;
  // let example = a > b ? 'a' : (4 > 5) ? 'World' : 'Hello';
  // let example = a < b ? 'a' : (4 > 5) ? 'World' : 'Hello';
  // let example = a > b ? 'a' : (4 > 5) ? 'World' : 'Hello';
  // let example = a > b ? 'a' : (4 < 5) ? 'World' : 'Hello';
  // let example = a > b ? 'a' : (4 > 5) ? 'World' : (6 > 7) ? 'Yes' : 'No';
  let example = a > b ? 'a' : 4 > 5 ? 'World' : 6 < 7 ? 'Yes' : 'No';

  // return (2 + 2 === 4) ? 'Hello World' : false;
  return example;
}

// console.log(addTwoNumbers(2, 1));
console.log(addTwoNumbers(2, 3));
