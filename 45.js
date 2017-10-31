

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
  var d = 0;
  while (d < n/d) {
    if ( n % d === 0 && n/d === 2 * d - 1) { console.log('hexagonal', d); return true; }
    d++;
  }
  return false;
}

console.log(hexagonal(process.argv[2]));
//console.log(pentagonal(process.argv[2]));
//console.log(triangular(process.argv[2]));
