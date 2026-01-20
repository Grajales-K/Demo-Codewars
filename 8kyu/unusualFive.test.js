// to run a single test npx jest File.name.test.js, to run all test npm test

const unusualFive = require("./unusualFive"); 

describe("unusualFive", function () {
  it("should return 5", function () {
    expect(unusualFive()).toBe(5);
  });
});


