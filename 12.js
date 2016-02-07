// function triangle(tri) {
//   var i = +tri;
//   while (i > 0 ) {
//     tri += i - 1;
//     i--;
//   }
//   return tri;
// }

var tri = 0

for (var i = 1; factors(tri).length < 500; i++) {
  tri += i;
  if (tri % 2 !== 0) continue;
}

console.log(tri);

function factors(n) {
  var i = n, factors = [];
  for (var i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) { factors.push(i); factors.push(n / i) }
  }
  return factors;
}
