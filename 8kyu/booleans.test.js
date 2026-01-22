const boolToWord = require("./booleans");

describe("Basic tests", () => {
  test("Testing for basic tests", () => {
    expect(boolToWord(true)).toBe("Yes");
    expect(boolToWord(false)).toBe("No");
    
  });
});

// CODEWARS TEST
// describe("Basic tests", () => {
//   it("Testing for basic tests", () => {
//     assert.strictEqual(boolToWord(true), "Yes");
//     assert.strictEqual(boolToWord(false), "No");
//   });
// });