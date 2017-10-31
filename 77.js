'use strict';
const isPrime = require('./lib.js').isPrime;

const getPrimeTerms = module.exports.getPrimeTerms = function(n) {
  const primeTerms = getAllPrimesLessThan(n);
  let count = 0;
  let primeTermIterator = primeTerms.length - 1;
  while (primeTermIterator) {
    let term = primeTerms[primeTermIterator];
    console.log('TERM:', term)
    console.log('ITERATOR:', primeTermIterator);
    if (term * 2 === n) { console.log('winner', term); count++; }

    let remaining = primeTermIterator;



    while (remaining) {
      let i = primeTerms[remaining];
      console.log('i', i, remaining)
      if (term + i === n) { console.log('winner', term, i); count++; }
      let multiples = 2;
      while (i * multiples) <= n) {
        if (i * multiples) === n) { console.log('winner', i, multiples); count++; }
        console.log('loser', term, multiples);
        multiples++;
      }
      while (term + (i * multiples) <= n) {
        if (term + (i * multiples) === n) { console.log('winner', term, i, multiples); count++; }
        console.log('loser', term, i, multiples);
        multiples++;
      }
      remaining--;
    }
    primeTermIterator--;
  }
  return count;
}

const getAllPrimesLessThan = module.exports.getAllPrimesLessThan = function(n) {
  const primes = [];
  let i = n;
  while (i >= Math.floor(n / 2)) {
    if (isPrime(i)) primes.push(i);
    if (isPrime(n - i) && primes.indexOf(n - i) === -1) primes.push(n - i);
    i--;
  }
  return primes.sort();
}
