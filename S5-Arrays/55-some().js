let example1 = [1, 2, 3, 4, 5].some((element) => {
  return element > 4;
});

let example2 = [1, 2, 3, 4, 5].some((element) => {
  return element > 100;
});

console.log(example1);
console.log(example2);