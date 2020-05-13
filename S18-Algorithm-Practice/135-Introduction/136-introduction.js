// Solution 1
function introduction(firstName, lastName) {
  const introduction = 'Hi, my name is '.concat(firstName, ' ', lastName, '.');

  return introduction;
}

console.log(introduction('Poch', 'Tan'));

// Solution 2
function introduction2(firstName, lastName) {
  const introduction = 'Hi, my name is ' + firstName + ' ' + lastName + '.';

  return introduction;
}

console.log(introduction2('Poch', 'Tan'));

// Solution 3
function introduction3(firstName, lastName) {
  const introduction = `Hi, my name is ${firstName} ${lastName}.`;

  return introduction;
}

console.log(introduction3('Poch', 'Tan'));
