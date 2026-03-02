// 8 kyu
// Find numbers which are divisible by given number
// Description:
// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]


function divisibleBy(numbers, divisor) {
  let result = [];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
      result[result.length] = numbers[i];
    }
  }
  console.log(result);
  return result;
}

console.log("----------- Testing divisibleBy -----------");   

const testCases = [
    {numbers: [1, 2, 3, 4, 5, 6], divisor: 2, expected: [2, 4, 6]},
    {numbers: [5, 10, 15, 20], divisor: 5, expected: [5, 10, 15, 20]},
    {numbers: [1, 3, 5, 7], divisor: 2, expected: []},      
    {numbers: [0, 1, 2, 3], divisor: 1, expected: [0, 1, 2, 3]},
];

testCases.forEach(  ({numbers, divisor, expected}, index) => {
    const result = divisibleBy(numbers, divisor);
    const passed = JSON.stringify(result) === JSON.stringify(expected);
    console.log(`Test #${index + 1}: numbers: ${JSON.stringify(numbers)}, divisor: ${divisor}`);
    console.log(`result: ${JSON.stringify(result)} | expected: ${JSON.stringify(expected)} | ${passed ? "✅ PASS" : "❌ FAIL"}\n`);
})