// 6 kyu Simple Simple Simple String Expansion

// Given a string that includes alphanumeric characters ("3a4B2d") 
// return the expansion of that string: The numeric values represent 
// the occurrence of each letter preceding that numeric value. There 
// should be no numeric characters in the final string.

// Notes
// The first occurrence of a numeric value should be the number of times each 
// character behind it is repeated, until the next numeric value appears
// If there are multiple consecutive numeric characters, only the last one 
// should be used (ignore the previous ones)
// Empty strings should return an empty string.

// Your code should be able to work for both lower and capital case letters.

// "3D2a5d2f"  -->  "DDDaadddddff"    # basic example: 3 * "D" + 2 * "a" + 5 * "d" + 2 * "f"
// "3abc"      -->  "aaabbbccc"       # not "aaabc", nor "abcabcabc"; 3 * "a" + 3 * "b" + 3 * "c"
// "3d332f2a"  -->  "dddffaa"         # multiple consecutive digits: 3 * "d" + 2 * "f" + 2 * "a"
// "abcde"     -->  "abcde"           # no digits
// "1111"      -->  ""                # no characters to repeat
// ""          -->  ""                # empty string

/**
 * Expands a string by repeating letters based on the last digit found.
 * * @param {string} str - The alphanumeric input string (e.g., "3a2b").
 * * @returns {string} - The expanded string (e.g., "aaabb").
 * * @example
 * stringExpansion("3a")     // returns "aaa"
 * stringExpansion("abc")    // returns "abc" (default multiplier is 1)
 * stringExpansion("3d2a")   // returns "dddaa"
 */


function stringExpansion(str) {
  const chainWord = str.split('');

  // State: The multiplier persists until a new digit is encountered.
  // Initialized to 1 to handle strings starting with letters (e.g., "abc").
  let multiplyChar = 1;
  let result = '';

  for (let i = 0; i < chainWord.length; i++) {
    let char = chainWord[i];

    // If the character is a digit, we update the multiplier state.
    if (char >= '0' && char <= '9') {
      multiplyChar = parseInt(char);
    } 
    // If it's a letter, we repeat it based on the current multiplier.
    else {
      result += char.repeat(multiplyChar);
    }
  }
  
  return result;
}

// -------------- test cases stringExpansion() --------------

const strings = [
    ["3D2a5d2f",  "DDDaadddddff"],
    ["3abc",      "aaabbbccc"],
    ["3d332f2a",  "dddffaa"],
    ["3a2b",      "aaabb"],
    ["abcde",     "abcde"],
    ["1111",      ""],
    ["",          ""]
   
];

strings.forEach(([input, expected]) => {
    const result = stringExpansion(input);
    console.log(`Input: "${input}" | Expected: "${expected}" | Test Passed: ${result === expected}`);
});