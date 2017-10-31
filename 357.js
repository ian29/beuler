var isPrime = require('./lib.js').isPrime;

function testFactors(n) {
  if (+n === 4) return false;
  var d = 1;
  while (d < n/d) {
    if (n % d === 0 && !isPrime(d + n/d)) return false;
    d++;
  }
  return true;
}

function summer(n) {
  var sum = 0;
  while (n) {
    if (testFactors(n)) sum += +n;
    n -= 2;
  }
  return sum;
}

//console.log(process.argv[2], testFactors(process.argv[2]))
//console.log('test', testFactors(process.argv[2]));
console.log('sum', summer(process.argv[2]));
