// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]



function stringToArray(string) {
  return string.split(" ");
}

module.exports = stringToArray;


// Explanation: we used the method split(" ") to split the 
// string into an array of words, using the space character as the separator.