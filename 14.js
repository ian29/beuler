function collatz(n) {
  var count = 1;
  while (n > 1) {
    n = (n % 2 === 0) ? n / 2 : 3 * n + 1;
    console.log(n)
    count++;
  }
  return count;
}

var a = 0;
var i = 1000000;
while (i > 1) {
  a = (collatz(i) > collatz(a)) ? i : a;
  i--;
}
console.log(a)
