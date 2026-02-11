// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

// I need to extract the initials from a string. First, I initialze my
// result with the first character in uppercase. Then, I iterate through the 
// string; whenever I encounter a space, I target the character at the next index
// capitalize it, and concatenate it to my result using a dot as separator.

function abbrevName(name){
    let acronym = name[0].toUpperCase();

    for(let i = 0; i < name.length; i++){
        if(name[i] === " "){
            acronym = acronym + "." + name[i + 1].toUpperCase();
        }
    }
    return acronym;
}


// This function processes each individual string

console.log("--- Testing abbrevName Logic ---");

const names = [
  "Sam harris ford",
  "Patrick Feenan",
  "Evan Cole",
  "P Favuzzi",
  "David Mendieta",

];

for (const item of names) {
  const sortedResult = abbrevName(item);
  console.log(`Original: ${item}  ->  acronym: ${sortedResult}`);
}