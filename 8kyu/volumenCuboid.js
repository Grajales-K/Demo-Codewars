// 8 kyu Volume of a Cuboid

// Bob needs a fast way to calculate the volume of a 
// rectangular cuboid with three values: the length, 
//   width and height of the cuboid.

// Write a function to help Bob with this calculation.

class Kata {
  static getVolumeOfCuboid(length, width, height) {
   return length * width * height;
  }
}

const getVolumeOfCuboid1 = (length, width, height) => {
  return length * width * height;
};
// Or even shorter:
const getVolumeOfCuboid2 = (l, w, h) => l * w * h;

console.log('----------- Testing getVolumeOfCuboid -----------\n');

// Object-driven test cases
const testCases = [
  { length: 1, width: 2, height: 2, expected: 4 },
  { length: 6, width: 2, height: 5, expected: 60 },
  { length: 2, width: 3, height: 4, expected: 24 },
  { length: 5, width: 5, height: 5, expected: 125 },
  { length: 1.5, width: 2, height: 2, expected: 6 },
  { length: 2.5, width: 4, height: 3.5, expected: 35 },
  { length: 10, width: 20, height: 30, expected: 6000 },
  { length: 100, width: 50, height: 2, expected: 10000 }
];

testCases.forEach(({ length, width, height, expected }, index) => {
  const result = Kata.getVolumeOfCuboid(length, width, height);
  const passed = result === expected;

  console.log(
    `Test #${index + 1}: Inputs [L: ${length}, W: ${width}, H: ${height}]`
  );
  console.log(
    `result: ${result} | expected: ${expected} | ${
      passed ? '✅ PASS' : '❌ FAIL'
    }\n`
  );
});