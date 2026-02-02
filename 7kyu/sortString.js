// Failed Sort - Bug Fixing #4
// Oh no, Timmy's Sort doesn't seem to be working? Your task is to 
// fix the sortArray function to sort all numbers in ascending order


// ===================> bug function =========================

// let sortArray = function (value) {
//   return value
//     .split("")
//     .sort((c, p) => c / p)
//     .join("");
// };

// Technical breakdown:
// in Js string are immutable, meaning they cannot be changed or reordered directly.

// manipulate the characters, we must to convert as string to an array of characters using split(""), then sort the array using sort() method, and finally join the sorted array back into a string using join("").
// sort() we call the sorth method on the array. by default, it sorts elements alphabetically/lexicographically, so 
// no x=extra logic is needed for simple characteres.
// join('') finally we use join to glue the array elements back togueter into a single string.


// ===================> fixed function =========================


