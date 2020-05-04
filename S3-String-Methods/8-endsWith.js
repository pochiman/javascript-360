let example1 = 'Hello World';

console.log(example1.endsWith('World'));
console.log(example1.endsWith('ZWorld'));
console.log(example1.endsWith('Worl', example1.length - 1));
console.log(example1.endsWith('Wo', 8));