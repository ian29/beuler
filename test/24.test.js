var problem24 = require('../24.js');
var test = require('tape');

test('[24] factorial', t => {
  t.equals(problem24.factorial(3), 6, '3! = 6');
  t.equals(problem24.factorial(4), 24, '4! = 24');
  t.equals(problem24.factorial(10), 3628800, '10! = 3628800');
  t.end();
});

test('[24] permut', t => {
  t.deepEquals(problem24.permut('012'), [ '012', '021', '102', '120', '201', '210'], 'permuts');
  t.end();
});
