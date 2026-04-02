// 6 kyu
// Coding Meetup #15 - Higher-Order Functions Series - Find the odd names

// VIM
// EMACS
// Instructions
// Output
// Past Solutions
// You will be given an array of objects representing data about developers who have signed up to 
// attend the next coding meetup that you are organising.

// Given the following input array:

var list1 = [
  { firstName: 'Abb', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' }, //odd 261
  { firstName: 'Aba', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' } //even 260
];
// write a function that when executed as findOddNames(list1) returns only the developers where if you add 
// the ASCII representation of all characters in their first names, the result will be an odd number:

// [
//   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ]
// Explanation of the above:

// Sum of ASCII codes of letters in 'Aba' is: 65 + 98 + 97 = 260 which is an even number
// Sum of ASCII codes of letters in 'Abb' is: 65 + 98 + 98 = 261 which is an odd number


function findOddNames(list) {
  return list.filter((person) => {
    const nameChars = person.firstName.split('');

    const totalSumChar = nameChars.reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    console.log(totalSumChar)//two sums: 260 and 261
    return totalSumChar % 2 !== 0;
  });
}
    console.log(findOddNames(list1));

    //   const asciiSum = dev.firstName
    //     .split('')
    //     .reduce((sum, char) => sum + char.charCodeAt(0), 0);
    //   return asciiSum % 2 === 1; // Keep if the sum is odd
    // }); 


