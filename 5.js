
console.log(lcm(process.argv[2]));

function lcm(n) {
  var answer = 1;
  var o = {};
  while (n > 1) {
    var m = mode(primeFactors(n));
    if (!o[m.mode]) o[m.mode] = m.max
    else if (m.max > o[m.mode]) o[m.mode] = m.max;
    n--;
  }
  for (i in o) answer *= Math.pow(i, o[i]);
  return answer;
}

function isPrime(n) {
  if (n === 2) return true;
  var sq = Math.sqrt(n);
  if (n % 2 === 0 || n % sq === 0) return false;
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

function mode(arr) {
  // cheat: if 1 is the first element in the array
  // we know it's a prime number and can just skip the work
  if (arr[0] === 1) arr.shift();
  return arr.reduce(function(a, b) {
    var val = a.mapping[b] = (a.mapping[b] || 0) + 1;
    if (val > a.max) {
        a.max = val;
        a.mode = b;
    }
    return a;
  }, {
    mode: null,
    max: -Infinity,
    mapping: {}
  });
}