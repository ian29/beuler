

function triangular(t) {
  var sqrt = Math.sqrt(2 * t);
  return (Math.floor(sqrt) * Math.ceil(sqrt) === 2 * t);
}

function pentagonal(p) {
  var d = 0, n = p * 2;
  while (d < n/d) {
    if (n % d === 0 && n/d === 3 * d - 1) { console.log('pentagonal', d); return true; }
    d++;
  }
  return false
}

function hexagonal(n) {
  var d = 1;
  while (d < n/d) {
    if ( n % d === 0 && n/d === 2 * d - 1) { console.log('hexagonal', d); return true; }
    d++;
  }
  return false;
}

// d = 40755
let n = 144; 
let p = false, t = false;

while (!p || !t) {
  p = pentagonal(nextHex(n));
  t = triangular(nextHex(n));
  n++;
}

console.log(`
n: ${n - 1}
number: ${nextHex(n - 1)}
`);

function nextHex(n) {
  return n * ((2*n) - 1)
};
