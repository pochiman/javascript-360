let example1 = { hello: 'World', bye: 'Now' };

// let example2 = example1;
// example2.hello = 'Today';

let example2 = Object.assign({}, example1);
example2.hello = 'Today';

console.log(example1);
console.log(example2);
