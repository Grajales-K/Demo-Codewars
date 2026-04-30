// level 7 kyu




function descendingOrder(n){
    return parseInt(String(n).split('').sort((a, b) => b - a).join(''));
}


// ------- tests -------


const testCases = [
  { n: 42145, expected: 54421 },
  { n: 145263, expected: 654321 },
  { n: 123456789, expected: 987654321 },
  { n: 0, expected: 0 },
  { n: 111, expected: 111 },
  { n: 9876543210, expected: 9876543210 }
];

console.log("----------- Testing descendingOrder -----------");

testCases.forEach(({n, expected}, index) => {
    const result = descendingOrder(n);
    const passed = result === expected;

    console.log(`test #${index + 1} input: ${n}`,);
    console.log(`result: ${result} | expected: ${expected} | 
        ${ passed ? "✅ PASS" : "❌ FAIL"}`);
    console.log("-------------------------------------------");
})