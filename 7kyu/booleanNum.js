// create a function that take three numbers as
// parameters and returns the largest of the three numbers.

function largestNum(num1, num2, num3) {
  return Math.max(...arguments);
}


function largestNum(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

console.assert(largestNum(5, 3, 7) === 7, 'Largest number in third position');
console.assert(largestNum(5, 9, 7) === 9, 'Largest number in second position');
console.assert(largestNum(9, 3, 7) === 9, 'Largest number in first position');
console.assert(
  largestNum(1.3, 2.7, 3.1) === 3.1,
  'Failed with decimal numbers'
);
console.assert(largestNum(-3, -4, -5) === -3, 'Failed with negative numbers');




function isEven(n) {
  return n % 2 === 0;
}
