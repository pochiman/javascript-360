let exampleObject = {
  first: 'Poch',
  middleInitial: 'Q',
  last: 'Tan',
  codingStatus: 'Godly'
};

let exampleArray = [1, 2, 3, 4, 5];
// const { first, middleInitial, last, codingStatus } = exampleObject;
const [first, second, third, fourth, fifth] = exampleArray;
// console.log(exampleObject.codingStatus);
// console.log(last);
console.log(fifth);
