function factorializeNumber(num) {
  let product = 1;

  // for (let i = 1; i <= num; i++) {
  for (let i = 2; i <= num; i++) {
    // console.log(i);
    // console.log(product);
    product *= i;
  }

  return product;
}

console.log(factorializeNumber(5));
console.log(factorializeNumber(4));
console.log(factorializeNumber(1));
console.log(factorializeNumber(0));
console.log(factorializeNumber(10));
