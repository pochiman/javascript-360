let example1 = [true, false, 1, 2, 3, 4, 5];
let iterator = example1.entries();

for (let i = 0; i < example1.length; i++) {
  console.log(iterator.next().value);
}
