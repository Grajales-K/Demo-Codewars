const items = require("./pushIntoArray");

describe("push an object into array (Jest version)", () => {
  test("should have a value", () => {
    expect(items.length).toBeGreaterThan(0);
  });

  test("should have only one value", () => {
    expect(items).toHaveLength(1);
  })
  test("should have the correct value", () => {
    expect(items).toEqual([{ a: "b", c: "d"}])
  })
});
