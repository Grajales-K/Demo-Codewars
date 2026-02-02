// Details
// You will be given an array of numbers which can be used using the 
// String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to 
// convert the number to a character. It is recommended to map over 
// the array of numbers and convert each number to the corresponding 
// ascii character.

// Examples
// These are example of how to convert a number to an ascii Character:
// Javascript => String.fromCharCode(97) // a
// C# => Tools.FromCharCode(97) // a

// ======================== bug function ========================= 

// const arrowFunc = function(arr) {
//   return arr.map( => ).join(''); //Complete this function
// }


// Technical breakdown:

// to fix the function, we need to set in the map method the value to convert
// each character code to its corresponding character using String.fromCharCode(x)
// and the again return the joined string.

// ======================== fixed function =========================

const arrowFunc = function (arr) {
  return arr.map((x) => (x = String.fromCharCode(x))).join(""); 



// Test cases
const testArrays = [
  [72, 101, 108, 108, 111],
  [87, 111, 114, 108, 100],
  [74, 97, 118, 97, 83, 99, 114, 105, 112, 116],
  [67, 104, 97, 116, 71, 80, 84],
];

console.log("--- Testing ASCII Conversion ---");    
for (const arr of testArrays) {
  const result = arrowFunc(arr);
  console.log(`Input: [${arr}] -> Output: "${result}"`);
};