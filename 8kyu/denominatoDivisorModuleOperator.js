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


console.log("----------- Testing divisibleBy -----------\n");

const testCases = [
  { numbers: [1, 2, 3, 4, 5, 6], divisor: 2, expected: [2, 4, 6] },
  { numbers: [5, 10, 15, 20], divisor: 5, expected: [5, 10, 15, 20] },
  { numbers: [1, 3, 5, 7], divisor: 2, expected: [] },
  { numbers: [0, 1, 2, 3], divisor: 1, expected: [0, 1, 2, 3] },
];


//this will compare the two arrays, and return true if they are the same, 
// and false if they are not the same.
//a.every() method will check if all elements in the array pass the test 
//implemented by the provided function.
const sameArrays = (a, b) =>
  a.length === b.length && a.every((v, i) => v === b[i]);

testCases.forEach(({ numbers, divisor, expected }, index) => {
  const result = divisibleBy(numbers, divisor);

  //we will use the sameArrays function to compare the result and expected arrays,
  //this means e.g. if result is [2, 4, 6] and expected is [2, 4, 6], 
 //then sameArrays will return true,
  const passed = sameArrays(result, expected);

  console.log(`Test #${index + 1}: [${numbers}] (Divisor: ${divisor})`);
  console.log(
    `result: [${result}] | expected: [${expected}] | ${
      passed ? "✅ PASS" : "❌ FAIL"
    }\n`
  );
});