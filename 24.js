'use strict'
var str = '123';

module.exports.factorial = function(n) {
  let nc = n - 1;
  while (nc) n *= nc--;
  return n;
}

var permut = module.exports.permut = function(str) {
  if (str.length < 2) return str; // This is our break condition\

  var permutations = []; // This array will hold our permutations

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    // Cause we don't want any duplicates:
    // if char was used already skip it this time
    if (str.indexOf(char) != i) continue;

    var remainingString = str.slice(0,i) + str.slice(i + 1,str.length);
    for (var subPermutation of permut(remainingString)) permutations.push(char + subPermutation);
  }

  if (permutations.length > 1000000) {
    console.log(permutations[999999]);
    return;
  }

  return permutations.sort();
}

permut('0123456789');
