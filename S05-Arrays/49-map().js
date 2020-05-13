let example1 = [1, 2, 3, 4, 5];

let example2 = example1.map(element => {
  return element + 2;
});

let example3 = example1.map(element => {
  if (element < 3) {
    return element * 5;
  }
  return element + 2;
});

let example4 = [];
example1.forEach(element => {
  example4.push(element + 2);
});

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
