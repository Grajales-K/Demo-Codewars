// 8 kyu  Swap Values

// I would like to be able to pass an array with two elements
// to my swapValues function to swap the values. However it
// appears that the values aren't changing.

// Can you figure out what's wrong here?

function swapValues() {
  return arguments[0].reverse();
}

// function swapValues(args) {
//   let temp = args[0];
//   args[0] = args[1];
//   args[1] = temp;
// }

console.log('--------------- Test Cases ---------------');

const testCases = [
  [[1, 2]],
  [['first', 'second']],
  [[true, false]],
  [[1.5, 2.5]],
  [['hello', 'world']]
];

testCases.forEach((testCase) => {
  console.log(`Input: ${testCase} => Output: ${swapValues(...testCase)}`);
});
