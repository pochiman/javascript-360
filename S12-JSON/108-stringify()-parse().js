let exampleJSON = JSON.stringify({ example: true, name: 'Poch', id: 123 });

console.log(typeof exampleJSON);
console.log(exampleJSON);

exampleJSON = JSON.parse(exampleJSON);
console.log(typeof exampleJSON);
console.log(exampleJSON);
