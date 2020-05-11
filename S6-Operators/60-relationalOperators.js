function addTwoNumbers(a, b) {
  // return a < b;
  // return a > b;
  // return a >= b;
  // return a <= b;
  // return 'name' in a;
  // return 'name2' in a;

  function car() {}
  function dog() {}

  var pochCar = new car();

  // return pochCar instanceof car;
  return pochCar instanceof dog;
}

// console.log(addTwoNumbers(2, 8));
// console.log(addTwoNumbers(8, 8));
console.log(addTwoNumbers({ name: 'Poch' }, 8));
