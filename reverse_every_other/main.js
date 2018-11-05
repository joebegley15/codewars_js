const reverseInd = str => {
  return str.split('').reverse().join('');
}
const reverse = str => {
  str = str.split(' ').map((word, i) => i % 2 === 1 ? reverseInd(word) : word);
  return str.join(' ')
}