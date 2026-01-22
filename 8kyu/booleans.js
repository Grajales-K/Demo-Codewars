// Complete the method that takes a boolean value and return 
// a "Yes" string for true, or a "No" string for false.

function boolToWord(bool){
    if(bool === true){
        return "Yes";
    }else{
        return "No";
    }
}
module.exports = boolToWord;

// Alternative solution using ternary operator

// function boolToWord(bool) {
//   return bool ? "Yes" : "No";
// }


// explanation: we used the ternate operator to evaluate the condition 
// condition ? valor_si_true : valor_si_false
