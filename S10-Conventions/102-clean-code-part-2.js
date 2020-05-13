// just because it exists does not mean you should use this
// do not use this
// do not create a new String this way
// do not create a new Object this way
// do not create a new Number this way
// instantiate it, it will inherit its type
// let exampleString = new String('Yes');

// this is how you instantiate a type of number, boolean, object
// let exampleString = 8;
// let exampleString = true;
// let exampleString = {};

// in general, you want to do your best to not have to convert data types
// in javascript as it can cause a lot of issues down the road
// start with the type that you are actually going to use
// let exampleString = '5';
// console.log(Number(exampleString) + 5);

// always use strictly equals
let exampleString = '5';
console.log(Number(exampleString) === 5);
console.log(exampleString === 5);

// use properly formatted code for readability
// always use semicolons
// if (true) {
//   x + 5;
// } else {
//   x + 4;
// }

// when writing objects, you might want to break up the line like so
// there is really no reason to have any objects quoted here
// it's bad convention to have these wrapped in strings or quotes,
// your properties wrapped in strings or quotes because it's not necessary
let ex = {
  name1: 'Poch',
  name2: 'example 2'
};
