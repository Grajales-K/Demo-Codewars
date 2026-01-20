//Instructions

// Write a function that always returns 5
// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/
// Good luck :)

function unusualFive() {
  let word = "apple";
  return word.length;
}


module.exports = unusualFive;

//in this function the key is not use the numbers, so we can use the length of a word that has 5 letters to return the number 5 without directly using it.



// const { assert } = require("chai"); // Importamos la herramienta de comparación
// const unusualFive = require("./unusualFive"); // Importamos tu función

// describe("unusualFive", function () {
//   it("should return 5", function () {
//     assert.strictEqual(unusualFive(), 5);
//   });
// });



