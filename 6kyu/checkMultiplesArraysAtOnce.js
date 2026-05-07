// 6 kyu  Is it a Set?


// set! is a card game where you compete with other players, to find out who can find a set of cards first.
// Your task is to write a function that checks if a collection of three input cards qualifies as a set.

// The cards
// Every card has one, two or three symbols in it. A symbol has three distinct features:

// Shape (either diamond, snake or capsule)
// Colour (either green, blue or red)
// Pattern (either blank, striped or solid)
// The Set Cards(Image is taken as fair use from Wikipedia.)

// What's a set?
// A set always consists of three cards. The set is considered valid if, and only if, every property of 
// the card is either the same as the other two cards, or distinct from the other two. Properties include 
// the three features mentioned above plus the quantity of symbols.

// Input & Output
// You will receive an four arrays, containing the properties of the cards. One array, containing the quantity 
// of symbols, will be numeric, the others will contain strings.

// It's safe to assume that any card provided will always satisfy the properties outlined above. For example, 
// there will be no card passed with 5 symbols, or with a circle shape.

// Your task is to return a boolean, indicating if the given input properties qualify as a valid set - true 
// if they do false if not.

function isValidSet(quantities, shapes, colors, fills) {
  const allProperties = [quantities, shapes, colors, fills];

  for (let i = 0; i < allProperties.length; i++) {
    const prop = allProperties[i];
    const uniqueCount = new Set(prop).size;

    if (uniqueCount === 2) {
      return false;
    }
  }

  return true;
}



// Test Cases

const testCases = [
    [[1, 2, 3], ['diamond', 'diamond', 'diamond'], ['green', 'green', 'green'], ['blank', 'blank', 'blank']], // true
    [[1, 1, 1], ['diamond', 'snake', 'capsule'], ['green', 'blue', 'red'], ['blank', 'striped', 'solid']], // true
    [[1, 2, 2], ['diamond', 'diamond', 'diamond'], ['green', 'green', 'green'], ['blank', 'blank', 'blank']], // false
    [[1, 2, 3], ['diamond', 'snake', 'capsule'], ['green', 'blue', 'red'], ['blank', 'striped', 'solid']], // true
    [[1, 1, 2], ['diamond', 'diamond', 'diamond'], ['green', 'green', 'green'], ['blank', 'blank', 'blank']], // false
    [[1, 2, 3], ['diamond', 'diamond', 'diamond'], ['green', 'blue', 'red'], ['blank', 'striped', 'solid']], // true
    [[1, 2, 3], ['diamond', 'snake', 'capsule'], ['green', 'green', 'green'], ['blank', 'striped', 'solid']], // false
    [[1, 2, 3], ['diamond', 'snake', 'capsule'], ['green', 'blue', 'red'], ['blank', 'blank', 'solid']], // false   

];




testCases.forEach((element, index) => {
  const result = isValidSet(...element);

  console.log(`--- TEST #${index + 1} ---`);

  console.log(`quantity: [${element[0]}]`);
  console.log(`forms:     [${element[1]}]`);
  console.log(`colors:    [${element[2]}]`);
  console.log(`fills:   [${element[3]}]`);

  console.log(`RESULTADO:  ${result ? '✅ TRUE' : '❌ FALSE'}`);
  console.log('------------------------------------------\n');
});




// ----------------- docs ----------------
// new Set() will create a new Set object. A Set is a collection of unique 
// values. When you create a Set, it will only store unique values, meaning 
// that if you try to add duplicate values, they will be ignored.

// .size property returns the number of (unique) elements in a Set object.
// It is the equivalent of .length for arrays.

new Set([1, 2, 3]).size; // 3 (all different)
new Set([1, 1, 1]).size; // 1 (all duplicates, only one remains)
new Set([1, 1, 2]).size; // 2 (two duplicates, one different)

const numbers = [1, 1, 2, 2, 3, 4, 4, 4];
const unique = [...new Set(numbers)]; 
// result: [1, 2, 3, 4]
