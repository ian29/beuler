var sum = 0;
var a = 1, b = 0, c = 0;

while (c < 4000000) {
  if (c % 2 === 0) sum += c;
  console.log(c, sum);
  c = a + b;
  b = a;
  a = c;
}

console.log("total:", sum);