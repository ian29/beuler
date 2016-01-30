function isPrime(n) {
  if (n === 2) return true;
  var sq = Math.sqrt(n);
  if (n % 2 === 0 || n % sq === 0) return false;
  for (var p = 3; p < sq; p += 2) if (n % p === 0) return false;
  return true;
}

module.exports.isPrime = isPrime;