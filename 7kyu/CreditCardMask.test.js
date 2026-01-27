// /return masked string

const maskify = require("./CreditCardMask");

describe("test for function maskify", () => {
  test("should return the same string if is less than 4 characters", () => {
    expect(maskify("123")).toBe("123");
    expect(maskify("1")).toBe("1");
    expect(maskify("")).toBe("");
  });

  test("should mask all characters except for the last four", () => {
    expect(maskify("4556364607935616")).toBe("############5616");
    expect(maskify("11111")).toBe("#1111");
  });

  test("should work with letters and symbols as well", () => {
    expect(maskify("Skippy")).toBe("##ippy");
    expect(maskify("Nyan Cat")).toBe("#### Cat");
  });
});



//codewars test
// const Test = require("@codewars/test-compat");

// describe("maskify", function () {
//   it("should work for some examples", function () {
//     Test.assertEquals(maskify("4556364607935616"), "############5616");
//     Test.assertEquals(maskify("1"), "1");
//     Test.assertEquals(maskify("11111"), "#1111");
//   });
// });
