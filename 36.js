var ispal = require('./lib').pals

var n = 1000000;
var answer = 0;
while (n > 10) {
  if (ispal(n) && ispal(n.toString(2))) {
    console.log(n, n.toString(2));
    answer += n;
  }
  n--;
}

console.log(answer);
