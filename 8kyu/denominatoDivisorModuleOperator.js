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

divisibleBy([1, 2, 3, 4, 5, 6], 2);
// [Done] exited with code=0 in 0.141 seconds