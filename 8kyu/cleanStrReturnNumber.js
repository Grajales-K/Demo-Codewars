// 7 kyu
// Filter the number

// Instructions
// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to 
// retrieve the number from the text, can you return the number back 
// to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, 
// you have to return all the numbers in that string in the order 
// they occur.

To solve this, we use a Regular Expression (Regex) with the 
\D shorthand caracter by applying  the g (global) flag, we ensure the function
replaces every non-numeric character in the string, not just the first onemptied. 
Finally, we replace theses matches with an empty string, and convert the result
into a Number() to return the final output.


function filterString(value) {

   return Number(value.replace(/\D/g, ''))
}

