const stringToArray = require("./stringToArray");

describe("stringToArray", () => {
  it("should split a name into an array of two words", () => {
    expect(stringToArray("Robin Singh")).toEqual(["Robin", "Singh"]);
  });

  it("should split a long sentence into an array of words", () => {
    const sentence = "I love arrays they are my favorite";
    const expected = ["I", "love", "arrays", "they", "are", "my", "favorite"];

    expect(stringToArray(sentence)).toEqual(expected);
  });
});


// toEqual()
// we use this function to test arrays and Objects



// test from Codewars
// const stringToArray = require("./stringToArray")

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.deepEqual(stringToArray("Robin Singh"), ["Robin", "Singh"]);
//     assert.deepEqual(stringToArray("I love arrays they are my favorite"), [
//       "I",
//       "love",
//       "arrays",
//       "they",
//       "are",
//       "my",
//       "favorite",
//     ]);
//   });
// });
