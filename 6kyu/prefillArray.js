// 6 kyu Prefill an Array

// Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

// You have to validate input:

// v can be anything (primitive or otherwise)
// if v is ommited, fill the array with undefined (None in Python, nil in Ruby)
// if n is 0, return an empty array
// if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
// When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.

// Code Examples

// prefill(3,1) --> [1,1,1]

// prefill(2,"abc") --> ['abc','abc']

// prefill("1", 1) --> [1]

// prefill(3, prefill(2,'2d'))
//     --> [['2d','2d'],['2d','2d'],['2d','2d']]
    
// prefill("xyz", 1)
//     --> throws TypeErr


function prefill(n, v) {
  if (
    typeof n === 'boolean' ||
    isNaN(n) ||
    parseInt(n) !== Number(n) ||
    n < 0 ||
    n === Infinity ||
    n === -Infinity
  ) {
    throw new TypeError(`${n} is invalid`);
  }

  return Array(Number(n)).fill(v);
}


console.log('-------------- TEST CASES: ÉXITO ------------------');

const testCases = [
  [
    [3, 1],
    [1, 1, 1]
  ],
  [
    [2, 'abc'],
    ['abc', 'abc']
  ],
  [['1', 1], [1]],
  [
    [3, prefill(2, '2d')],
    [
      ['2d', '2d'],
      ['2d', '2d'],
      ['2d', '2d']
    ]
  ],
  [[0, 'vacio'], []]
];

testCases.forEach(([input, expected]) => {
  const result = prefill(input[0], input[1]);

  // Convertimos a string plano para comparar el contenido en Node
  const passed = result.flat().toString() === expected.flat().toString();

  console.log(
    `Input: "${input}" | Expected: "${expected}" | Test Passed: ${passed}`
  );
});

console.log('\n-------------- TEST CASES: ERRORES ------------------');

const errorCases = [
  ['xyz', 'xyz is invalid'],
  ['3.5', '3.5 is invalid'],
  [-5, '-5 is invalid'],
  [Infinity, 'Infinity is invalid'],
  [true, 'true is invalid']
];

errorCases.forEach(([input, expected]) => {
  let passed = false;

  try {
    prefill(input, 1);
  } catch (e) {
    if (e.name === 'TypeError' && e.message === expected) {
      passed = true;
    }
  }

  console.log(
    `Input: "${input}" | Expected: "${expected}" | Test Passed: ${passed}`
  );
});