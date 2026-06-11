// return masked string
function maskify(cc) {
  // console.log(cc);

  if (cc.length <= 4) {
    return cc;
  }

  const lastFour = cc.slice(-4);
  const maskingPart = cc.slice(0, -4);
  const masked = '#'.repeat(maskingPart.length);
  console.log(masked);

  return masked + lastFour;
}

module.exports = maskify;

function maskify2(cc) {
  // console.log(cc);

  if (cc.length <= 4) {
    return cc;
  }
  const lastFour = cc.slice(-4);
  console.log(lastFour);

  const maskingPart = cc.slice(0, -4);
  console.log(maskingPart);

  const masked = '#'.repeat(maskingPart.length);
  console.log(masked);

  console.log(masked + lastFour);

  return masked + lastFour;
}

// maskify2( "jjsksjfi100045670"); //invoke the function to run node.

console.log('\n-------------- TEST CASES: MASKIFY ------------------');

// Array con [input, expected]
const testCases = [
  ['', ''], // empty string
  ['123', '123'], // less than 4 characters
  ['1234', '1234'], // exactly 4 characters
  ['Skippy', '##ippy'], // more than 4 characters
  ['jjsksjfi100045670', '#############5670'] // large example
];

testCases.forEach(([input, expected]) => {
  const result = maskify(input);

  const passed = result === expected;
  console.log(
    `Input: "${input}" | Expected: "${expected}" | Result: "${result}" | Passed: ${
      passed ? '✅ SI' : '❌ NO'
    }`
  );
});
