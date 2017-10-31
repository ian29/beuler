'use strict';

var n = process.argv[2];
//var ans = Math.pow(2, 2*n)

/*
1(1) matrix = [ 1 ]
1(2) matrix = [ 1, 1 ]
1(3) matrix = [ 1, 1, 1 ]

2(2) matrix = [ [ 2, 1 ],
                [ 1, 1 ] ]
2(3) matrix = [ [3, 2, 1]
                [1, 1, 1] ]

3(3) matrix = [ [ 6, 3, 1 ],
                [ 3, 2, 1 ],
                [ 1, 1, 1 ] ]
*/

const matrix = [];

for (var x = 0; x < n; x++) {
  let row = [ 1 ];
  for (var y = 1; y < n; y++) {
    if (x === 0) row.push(1);
    else if (x === 1) row.push(y + 1);
    else {
      let above = matrix[x - 1][y];
      let left = row[y-1]
      row.push(above + left)
    }
  }

  matrix.push(row)
}

console.log(matrix);
