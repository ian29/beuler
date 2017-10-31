const test = require('tape');
const lib = require('../lib.js');

test('[lib] factors', t => {
  t.deepEquals(lib.factors(7), [1, 7], '7 => 1,7');
  t.deepEquals(lib.factors(10), [1, 2, 5, 10], '10 => 1,2,5,10');
  t.deepEquals(lib.factors(93), [1, 3, 31, 93], '93');
  t.deepEquals(lib.factors(100), [1, 2, 4, 5, 20, 25, 50, 100], '100');
  t.end();
});

test('[lib] isPrime', t => {
  t.ok(lib.isPrime(2), '2 is prime');
  t.ok(lib.isPrime(7), '7 is prime');
  t.ok(lib.isPrime(37), '37 is prime');
  t.ok(lib.isPrime(71), '71 is prime');
  t.notOk(lib.isPrime(1), '1 is not prime');
  t.notOk(lib.isPrime(4), '4 is not prime');
  t.notOk(lib.isPrime(100), '100 is not prime');
  t.notOk(lib.isPrime(393), '393 is not prime');
  t.end();
});

test('[lib] primeFactors', t => {
  t.deepEquals(lib.primeFactors(2), [ 2 ], '2');
  t.deepEquals(lib.primeFactors(93), [3, 31], '93');
  t.deepEquals(lib.primeFactors(100), [2, 2, 5, 5], 100)
  t.end();
});

test('[lib] palindromes', t => {
  t.ok(lib.pals(10001), '10001 is a palindrome');
  t.ok(lib.pals(10101), '10101 is a palindrome');
  t.ok(lib.pals(12321), '12321 is a palindrome');
  t.ok(lib.pals(99999), '99999 is a palindrome');
  t.ok(lib.pals(1001), '10001 is a palindrome');
  t.ok(lib.pals(1001), '10101 is a palindrome');
  t.ok(lib.pals(1221), '12321 is a palindrome');
  t.ok(lib.pals(9999), '9999 is a palindrome');
  t.ok(lib.pals(1234321), '1234321 is a palindrome');
  t.notOk(lib.pals('123'), '123 is not a palindrome');
  t.end();
});
