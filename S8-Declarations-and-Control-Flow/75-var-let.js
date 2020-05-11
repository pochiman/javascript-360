// var does variable hoisting.

// var is getting lifted outside of the for loop
// and var exists here, getting lifted outside of this
// into whatever the surrounding function scope is,
// in this case the entire file.

// so it's getting lifted into there so that i here if for
// whatever reason we called it would actually return 5.

// that's the main difference between let and var.

// var i;
// i = 0;
// var i = 0;
// var i = 'Hello';

// for(let i = 0; i < 5; i++) {

// }

function add() {
  // i exists here
  for (var i = 0; i < 5; i++) {}
  console.log(i);
}

console.log(i);
add();
