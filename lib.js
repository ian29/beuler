'use strict';

const isPrime = module.exports.isPrime = function(n) {
  // bail early on common primes
  if (n === 2 || n === 3 || n === 5) return true;
  if (n % 2 === 0 || n % 3 === 0 || n % 5 === 0 || n === 1) return false;

  // be more thorough for primes > 7
  const sq = Math.sqrt(n);
  if (n % sq === 0) return false;
  for (var p = 7; p < sq; p += 2) if (n % p === 0) return false;
  return true;
}

const primeFactors = module.exports.primeFactors = function(n) {
  if (n === 1) return [];
  if (isPrime(n)) return [ n ];
  const factors = [];
  let d = 2;

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

const factors = module.exports.factors = function factors(n) {
  var factors = [];
  var d = 0;
  while (d < n/d) {
    if (n % d === 0) factors.push(d, n/d);
    d++;
  }
  return factors.sort((a, b) => a - b);
}

const pals = module.exports.pals = function(na) {
  na = Array.from(na.toString());
  for (var i = 0; i < na.length/2; i++) {
    if (na[i] !== na[na.length - (i+1)]) return false;
  }
  return true
}
