// Write a function that accepts a non-negative integer n and a string 
// s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"


// function repeatStr (n, s) {
//   return s.repeat(n);
// }

function repeatStr (n, s){
    let result = "";
    for (let i = 0; i < n; i++){
        result += s;
    }
    return result;
}


const testCases = [
    [3, "js"],
    [5, "*"],
    [2, "ha"],
    [4, " "],
    [5, "yes"]
];

console.log("----------- testing repeatStr -----------");

for (const [n, s] of testCases){
    const result = repeatStr(n, s);
    console.log(` n: "${n}" | s:  "${s}" | result: "${result}"`);
}
