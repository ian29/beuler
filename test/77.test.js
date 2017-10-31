'use strict';

var test = require('tape');
var getAllPrimesLessThan = require('../77.js').getAllPrimesLessThan;
var getPrimeTerms = require('../77.js').getPrimeTerms;

test('[77] primes less than', t => {
  let expected = [2, 3, 5, 7];
  t.deepEqual(getAllPrimesLessThan(10), expected, '10 = 2, 3, 5, 7');
  t.end();
});

test('[77] primeTerms', t => {
  t.deepEqual(getPrimeTerms(10), 5, '10 = 5');
  t.end();
});
