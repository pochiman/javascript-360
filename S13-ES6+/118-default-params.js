// function noParamsEntered(x, y) {
// if (y === undefined) {
//   y = 10;
// }
// console.log(x);
// console.log(y);
// console.log(x + y);
// return x + y;
// }

// noParamsEntered('Poch');
// noParamsEntered(5);

// function noParamsEntered(x, y = 10) {
//   console.log(x + y);
function noParamsEntered(x, z = 5, y = 10) {
  console.log(x + y + z);
}

// noParamsEntered(5, 100);
noParamsEntered(5);
