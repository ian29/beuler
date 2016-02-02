var isPrime = require('./lib').isPrime;
var x = 600851475143;
var y = x;

for (var i = 1; i < Math.sqrt(x); i += 2) {
  if (x % i === 0 && isPrime(i)) console.log(i, isPrime(x / i))
}
