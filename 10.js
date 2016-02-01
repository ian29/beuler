
var isPrime = require('./lib').isPrime;

var primes = [];

for (var i = 0; i < 2000001; i++) {
  if (isPrime(i)) primes.push(i);
}

var sum = primes.reduce(function(a,b) {
  return a + b;
});

console.log(sum)