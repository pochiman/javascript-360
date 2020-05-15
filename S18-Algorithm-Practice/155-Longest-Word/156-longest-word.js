function longestWord(str) {
  let filteredArray = str.replace(/[\W_]/g, ' ').split(' ');
  let longest = '';

  filteredArray.forEach(word => {
    longest = word.length > longest.length ? word : longest;
  });

  return longest;
}

console.log(longestWord('Ready, steady, go!'));
console.log(longestWord('Ready[[[, steady, go!'));
console.log(longestWord('ABCd'));
