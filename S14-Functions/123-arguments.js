// function add() {
//   let array = [];
//   for (let i = 0; i < arguments.length; i++) {
//     array.push(arguments[i]);
//   }
//   console.log(array);
// }

// add(5);
// add(51, 6);
// add(511, 6, 7);

function add(...array) {
  // let array = [];
  // for (let i = 0; i < arguments.length; i++) {
  //   array.push(arguments[i]);
  // }
  console.log(array);
}

add(5);
add(51, 6);
add(511, 6, 7);
