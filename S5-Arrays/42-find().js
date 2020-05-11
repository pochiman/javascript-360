let example1 = [1, 2, 3, 4, 5].find(element => {
  return element > 3;
});

let example2 = [1, 2, 3, 4, 5].find(element => {
  return element > 4;
});

let example3 = [1, 2, 3, 4, 5].find(element => {
  return element > 6;
});

let example4 = [1, 2, 3, 4, 5].find(element => {
  return element > 6;
});

console.log(example1);
console.log(example2);
console.log(example3);
console.log(Boolean(example4));
