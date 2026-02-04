// Gordon Ramsay shouts. He shouts and swears. There may be 
// something wrong with him.

// Anyway, you will be given a string of four words. Your 
// job is to turn them in to Gordon language.

// Rules:

// Obviously the words should be Caps, Every word should 
// end with '!!!!', Any letter 'a' or 'A' should become '@', 
// Any other vowel should become '*'.

function gordon(a) {
  let words = a.toUpperCase().split(" ");
  let result = [];

  for (let word of words) {
    let transformWord = "";

    for (let i = 0; i < word.length; i++) {
      let char = word[i];

      if (char === "A") {
        transformWord += "@";
      } else if ("EIOU".includes(char)) {
        transformWord += "*";
      } else {
        transformWord += char;
      }
    }
    result.push(transformWord + "!!!!");
  }
  return result.join(" ");
}


const testCases = [
  ["What feck damn cake"],
  ["are you stu pid"],
  ["i am a chef"]
];

console.log("----------- testing Gordon Words -----------");

for (const [a] of testCases) {
  const result = gordon(a);
   //by  using \n we can separate the input string from the result.
  console.log(`a: "${a}" \nresult: "${result}"\n`);
}