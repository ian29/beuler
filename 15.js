'use strict';

/*
possible paths per node matrix:
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


// input should be 21 for project euler purposes
// (20 cells = 21 nodes)
var n = process.argv[2] || 21;

const matrix = [];

for (var x = 0; x < n; x++) {
  let row = [];
  for (var y = 0; y < n; y++) {
    if (x === 0 || y === 0) row.push(1); // seed first column/row with 1s
    else {
      let above = matrix[x - 1][y];
      let left = row[y - 1];
      row.push(above + left);
    }
  }
  matrix.push(row)
}

if (process.env.SHOW) console.log(matrix)
console.log(matrix[n - 1][n - 1]);
