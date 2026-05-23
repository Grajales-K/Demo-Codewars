// 7 kyu Sum of Array Averages

// Program a function that takes in an array of arrays of 
// numbers and returns the sum of the averages of the arrays.

// Example
// [
//   [3, 4, 1, 3, 5, 1, 4], #  (3 + 4 + 1 + 3 + 5 + 1 + 4) / 7 =  3
//   [21, 54, 33, 21, 77]   # (21 + 54 + 33 + 21 + 77)     / 5 = 41.2
// ]

// result: 3 + 41.2 = 44.2



function sumAverage(arrays) {
  const average = arrays.map((subArr) => {
    const sum = subArr.reduce((curr, accu) => curr + accu, 0);
    return sum / subArr.length;
  });

  const totalSum = average.reduce((curr, accu) => curr + accu, 0);

  return totalSum;
}

console.log('----------- Testing sumAverage -----------\n');

// Casos de prueba con diferentes arreglos de arreglos
const testCasesSumAverage = [
  {
    // El ejemplo que me diste: 3 + 41.2 = 44.2 -> Math.floor(44.2) = 44
    arrays: [
      [3, 4, 1, 3, 5, 1, 4],
      [21, 54, 33, 21, 77]
    ],
    expected: 44
  },
  {
    // Promedios exactos: [1, 2, 3] -> 2 | [4, 5, 6] -> 5 | Total: 2 + 5 = 7
    arrays: [
      [1, 2, 3],
      [4, 5, 6]
    ],
    expected: 7
  },
  {
    // Con un solo sub-arreglo: [1, 2, 2, 3] -> 8 / 4 = 2 | Total: 2
    arrays: [
      [1, 2, 2, 3]
    ],
    expected: 2
  },
  {
    // Con números negativos: [-10, -5] -> -7.5 | [10, 5] -> 7.5 | Total: 0
    arrays: [
      [-10, -5],
      [10, 5]
    ],
    expected: 0
  }
];

// Ejecutamos las pruebas con el mismo formato visual
testCasesSumAverage.forEach(({ arrays, expected }, index) => {
  const result = sumAverage(arrays);
  const passed = result === expected;

  console.log(`Test #${index + 1}: Evaluando ${arrays.length} sub-arreglos.`);
  console.log(
    `Result: ${result} | Expected: ${expected} | ${
      passed ? '✅ PASS' : '❌ FAIL'
    }\n`
  );
});