
var x = 600851475143;
var y = x;

for (var i = 1; i < Math.sqrt(x); i += 2) {
  if (x % i === 0 && isPrime(i)) console.log(i, isPrime(x / i))
}

function isPrime(n) {
  if (x == 2) return true;
  var sq = Math.sqrt(n);
  if (n % 2 === 0 || n % sq === 0) return false;
  for (var p = 2; p < sq; p++) {
    if (n % p === 0) return false;
  }
  return true;
}