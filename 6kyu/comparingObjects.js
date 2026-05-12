// 6 kyu   Are the values equal?

// Create the areEqual function that will return true if the two supplied arguments hold exactly 
// the same values and the same number of values (not necessarily in the same order) and false if they do not.

// The supplied arguments will be objects, arrays and strings.

// Examples:

// {laura:4, adam:3} & {laura:4, adam:3} => true 
// {adam:3, laura:4, maisie:2} & {laura:4, adam:3} => false
// [{a:4},{b:3}] & [{b:3},{a:4}]) => true
// {a:['5','6','7'], b:['4','5','6']} & {a:[5,6,7], b:[4,5,6]} => false
// 'Hello' & 'Hello' => true


function areEqual(value1, value2) {

    if(value1 === value2 ) return true;

    if(typeof value1 !==  'object' || typeof value2 !== 'object') return false;

    if (value1 === null || value2 === null) return false;

    let keys1 = Object.keys(value1);
    let keys2 = Object.keys(value2);
    if(keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        if( !areEqual(value1[key], value2[key])){
            return false;
        }
    }

    return true;
}




console.log('--------------- Test Cases ---------------');

const testCases = [
  [
    { laura: 4, adam: 3 },
    { laura: 4, adam: 3 }
  ],
  [
    { adam: 3, laura: 4, maisie: 2 },
    { laura: 4, adam: 3 }
  ],
  [
    [{ a: 4 }, { b: 3 }],
    [{ b: 3 }, { a: 4 }]
  ],
  [
    { a: ['5', '6', '7'], b: ['4', '5', '6'] },
    { a: [5, 6, 7], b: [4, 5, 6] }
  ],
  ['Hello', 'Hello']
];

testCases.forEach((element, index) => {
  const result = areEqual(...element);

  console.log(`Test ${index + 1}: [${element}]`);
  console.log(`Result: ${result}`);
  console.log('------------------------------------------');
});           