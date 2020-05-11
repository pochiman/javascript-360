let example1 = {
  hello: 'World',
  bye: 'Now'
};

// let example2 = example1;
// let example2 = true;
let example2 = Object.assign({}, example1);

console.log(Object.is(example1, example2));

console.log(Object.is('Hello', 'hello'));
console.log(Object.is('Hello', 'Hello'));
