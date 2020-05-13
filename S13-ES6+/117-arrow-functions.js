// const exampleArray = [1, 2, 3, 4, 5].map(function (element) {return element + 1;});
// const exampleArray = [1, 2, 3, 4, 5].map(element => element + 1);
const exampleArray = [1, 2, 3, 4, 5].map((element, index) => {
  if (true) {
    return true;
  }
  return element + 1;
});

console.log(exampleArray);
