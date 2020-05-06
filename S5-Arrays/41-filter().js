let example2 = [1, 2, 3, 4, 5]
let example1 = example2.filter((element) => {
  return element < 4;
});

let example3 = [1, 2, 3, 4, 5].filter((element) => {
  return element < 4;
});

console.log(example1);
console.log(example2);
console.log(example3);