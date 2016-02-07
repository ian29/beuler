function isPrime(n) {
  if (!(n % 2 === 0) || n === 2) return true;
  var sq = Math.sqrt(n);
  if (n % sq === 0) return false;
  for (var p = 3; p < sq; p += 2) if (n % p === 0) return false;
  return true;
}

function primeFactors(n) {
  if (n === 1) return [ 1 ];
  if (isPrime(n)) return [ 1, n ];
  var factors = [];
  var d = 2;

  while (n > 1) {
    while (n % d == 0) {
      factors.push(d);
      n /= d;
    }
    d++;
    if (d*d > n) {
      if (n > 1) factors.push(n);
      break;
    }
  }
  return factors;
}

module.exports = {};
module.exports.isPrime = isPrime;
module.exports.primeFactors = primeFactors;
