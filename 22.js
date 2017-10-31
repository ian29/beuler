var fs = require('fs');
var names = fs.readFileSync('names.txt').toString().split(',')
  .map(name => name.match(/"(.*)"/)[1])
  .sort();

var alphabet = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
  S: 19,
  T: 20,
  U: 21,
  V: 22,
  W: 23,
  X: 24,
  Y: 25,
  Z: 26
}

function getName(name) {
  return name.split('').reduce((namevalue, letter) => {
    return namevalue += alphabet[letter];
  }, 0);
}

var answer = names.reduce((answer, name) => {
  return answer += ((names.indexOf(name) + 1) * getName(name));
}, 0);

console.log(answer);
