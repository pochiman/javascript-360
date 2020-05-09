let example1 = {
  hello: 'World', 
  bye: 'Now'
};

Object.freeze(example1);

console.log(Object.isFrozen(example1));