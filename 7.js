var isPrime = require('./lib.js').isPrime;

var n = process.argv[2];
var i = 0;
var p = 0;

while (p < n) {
  i++;
  if (isPrime(i)) p++;
}

console.log(i);
