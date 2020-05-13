let example1 = [1, 2, 3, 4, 5].reduce((currentTotal, currentValue) => {
  console.log(currentTotal);
  return currentTotal + currentValue;
});

console.log(example1);
