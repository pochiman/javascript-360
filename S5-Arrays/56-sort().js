let example1 = [1, 10, 2, 11, 3, 12, 4, 13, 5].sort((a, b) => {
  return a - b;
});

let example2 = [1, 10, 2, 11, 3, 12, 4, 13, 5].sort((a, b) => {
  return b - a;
});

console.log(example1);
console.log(example2);