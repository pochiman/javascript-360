let example1 = [true, false, 1, 2, 3, 4, 5];

console.log(example1.copyWithin(2));
console.log(example1.copyWithin(-2));
console.log(example1.copyWithin(-3));
console.log(example1.copyWithin(-4));
console.log(example1.copyWithin(-5));
console.log(example1.copyWithin(-6));
console.log(example1.copyWithin(-7));
console.log(example1.copyWithin(2, 0, example1.length - 1));
console.log(example1.copyWithin(2, 0, example1.length - 2));
console.log(example1.copyWithin(2, 0, example1.length - 3));
