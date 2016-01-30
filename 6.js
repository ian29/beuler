var n = process.argv[2];

// function sumSquare(m) {
//   var sum = 0;
//   while (m) {
//     sum += Math.pow(m,2);
//     m--;
//   }
//   return sum;
// }

// function squareSum(m) {
//   var sum = 0;
//   while (m) {
//     sum += +m;
//     m--;
//   }
//   return Math.pow(sum,2);
// }

function ss(m) {
  var sumSquare = 0;
  var squareSum = 0;
  while (m) {
    squareSum += +m;
    sumSquare += Math.pow(m,2);
    m--;
  }
  squareSum = Math.pow(squareSum,2);
  return squareSum - sumSquare;
}

console.log(ss(n));