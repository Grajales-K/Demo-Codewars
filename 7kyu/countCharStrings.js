// Given a string `str` and a single character `char` to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// should return 1 when the character appears only once
// Should return 0 for empty string
// should return no occurrences if no found character


function countChar(stringOFchar, findCharacter){
    let count = 0;
    
    for(i = 0; i < stringOFchar.length; i++){
        if (stringOFchar[i] === findCharacter){
            count += 1;
        }
    }
    return count;
}

console.log("----------- Testing countChar -----------");

const testCases = [
  { str: "What feck damn cake", char: "a", expected: 3 },
  { str: "are you stu pid", char: "u", expected: 2 },
  { str: "i am a chef", char: "z", expected: 0 },
  { str: "", char: "a", expected: 0 },
  { str: "hello", char: "h", expected: 1 },
];

testCases.forEach(({ str, char, expected }, index) => {
  const result = countChar(str, char);
  const passed = result === expected;

  console.log(`Test #${index + 1}: "${str}" (Find "${char}")`);
  console.log(
    `result: ${result} | expected: ${expected} | ${
      passed ? "✅ PASS" : "❌ FAIL"
    }\n`
  );
});