var x = 999, y = 999;
var a = 0;

for (var x = 1; x < 1000; x++) {
  for (var y = 1; y < 1000; y++) {
    var b = x * y;
    if (pals(b) && b > a) a = b;
  }
}
console.log(a);

function pals(n) {
  var na = n.toString();
  for (var i = 0; i < Math.sqrt(na.length); i++) {
    if (na[i] === na[na.length - (i+1)]) continue;
    return false;
  }
  return true
}