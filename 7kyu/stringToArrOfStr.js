// having a string "show me the execution!" convert it to an array of strings like this:
//  ["show", "me", "the", "execution!"]

function stringToArrOfStr(str) {
  let result = [];
  let actualWord = "";

  console.log(`Analizando frase: "${str}"\n`);

  for(let i = 0; i < str.length; i++){
    let char = str[i];

    // console.log(str[i]);

    if(char !== " "){
        actualWord += char;
        console.log(actualWord)
    } else if(actualWord.length > 0){
            result.push(actualWord);
            actualWord = "";
            console.log(actualWord);

        }
    }
    if (actualWord.length > 0) {
      result.push(actualWord);
    } 
    return result;
}

console.log(stringToArrOfStr("show me the execution!"));

