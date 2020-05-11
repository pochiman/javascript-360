// when naming variables, use camel case
// variables should always start with a letter
let petCat;

// do not create global variables
// we did not initialize it with let
// we did not initialize it with const
// we have assigned a value, but it is now globally available
// we have assigned a global variable and broken how programming works
// at this point or how it should work

// when you have global variables, that means things will interact with
// the window object and mess everything up so do not create global variables
// function add() {
//   x = 5;
// }

// console.log(x);

// if you do create a global variable, the convention is to put it all in
// CAPS as well as constants
const PI = Math.PI;

console.log(PI);
