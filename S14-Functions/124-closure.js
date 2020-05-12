// let addEx = (function () {
//   let total = 0;

//   return function () {
//     return (total += 1);
//   };
// })();

// console.log(addEx());
// console.log(addEx());
// console.log(addEx());
// console.log(addEx());

// function add(num) {
//   total += num;
//   console.log(total);
// }

let addEx = (function () {
  let total = 0;

  return function (param1) {
    return (total += param1);
  };
})();

console.log(addEx(5));
console.log(addEx(10));
console.log(addEx(15));

function add(num) {
  total += num;
  console.log(total);
}
