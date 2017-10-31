
for (var i = 2; i <= 70; i++) {
  //console.log(Math.pow(2,i).toString().split(''))
  var sum = Math.pow(2,i).toString().split('').reduce(function(a,b) { return +a + +b; });
  console.log(i, Math.pow(2,i), sum);
}
