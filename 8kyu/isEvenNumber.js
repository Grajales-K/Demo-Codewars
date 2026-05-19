//Write a function that takes a number as an argument and returns true if the 
// number is even, and false if the number is odd.

function isEven(n) {
  return n % 2 === 0;
}


console.log('----------- Testing isEven -----------\n');

const testCasesIsEven = [
  { num: 2, expected: true },
  { num: 3, expected: false },
  { num: 0, expected: true },
  { num: 100, expected: true },
  { num: 77, expected: false },
  { num: -4, expected: true },
  { num: -5, expected: false }
];

testCasesIsEven.forEach(({ num, expected }, index) => {
  const result = isEven(num);
  const passed = result === expected;

  console.log(`Test #${index + 1}: Number checked: ${num}`);
  console.log(
    `Result: ${result} | Expected: ${expected} | ${
      passed ? '✅ PASS' : '❌ FAIL'
    }\n`
  );
});
