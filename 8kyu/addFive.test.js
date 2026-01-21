// npm test addFive
// npx jest --watch addFive.test.js


const addFive = require("./addFive");

describe("fix add five", () => {
  test("fixed tests", () => {
    expect(addFive(5)).toBe(10);
    expect(addFive(0)).toBe(5);
    expect(addFive(-5)).toBe(0);
  });
});


// codewars test
// const Test = require('@codewars/test-compat');

// describe('fix add five', () => {
//   it('fixed tests', () => {
//     Test.assertEquals(addFive(5), 10)
//     Test.assertEquals(addFive(0), 5)
//     Test.assertEquals(addFive(-5), 0)
//   })
// })