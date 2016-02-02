// a = m^2 - n^2
// b = 2mn
// c = m^2 + n^2

// ( m^2 - n^2) * (2mn) * (m^2 + n^2) === 1000
// m(m + n) = 500

// the smallest n we have to test is 0, which means we only havet to test
//   m < Math.sqrt(500)

for (var m = 0; m < Math.sqrt(500); m++) {
  var n = (500/m) - m;
  // we only care about integers
  if (!/^\d+$/.test(n)) continue;

  var a = Math.pow(m,2) - Math.pow(n,2);
  var b = 2 * m * n;
  var c = Math.pow(m,2) + Math.pow(n,2);
  if (a > 0 && b > 0 && c > 0) console.log(a * b * c);
}
