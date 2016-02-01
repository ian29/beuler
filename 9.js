// a = m^2 - n^2
// b = 2mn
// c = m^2 + n^2

// ( m^2 - n^2) * (2mn) * (m^2 + n^2) === 1000
// m(m + n) = 500

// the smallest n we have to test is 0, which means we only havet to test
//   m < Math.sqrt(500)

var pairs = [];

for (var m = 0; m < Math.sqrt(500); m++) {
  var n = (500/m) - m;
  // we only care about integers
  if (/^\d+$/.test(n)) pairs.push([m,n]);
}

pairs.forEach(function(p) {
  var m = p[0], n = p[1]
  var a = Math.pow(m,2) - Math.pow(n,2);
  var b = 2 * m * n;
  var c = Math.pow(m,2) + Math.pow(n,2);
  // all these add up to 1000, but only 1 set are all postive
  if (a > 0 && b > 0 && c > 0) console.log(a * b * c);
});