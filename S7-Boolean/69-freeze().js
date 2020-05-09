let example1 = {
  hello: 'World', 
  bye: 'Now'
};

let example2 = Object.freeze(example1);

example2.test = true;
example2.hello = true;

console.log(example2);