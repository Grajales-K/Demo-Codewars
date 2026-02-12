// 8 kyu
// Basic Mathematical Operations

// Instructions
// Past Solutions
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7


// for this operations, we can use simple if statements to check which 
// operator we are dealing with and return the appropriate result.


function basicOp(operation, value1, value2){
    if(operation === "+"){
        return value1 + value2;
    }
    if(operation === "-"){
        return value1 - value2;
    }
    if (operation === "*") {
    return value1 * value2;
    }
    if (operation === "/") {
    return value1 / value2;
    }
    return 0; //if the operator is not recognized, return 0 as a default case
}

