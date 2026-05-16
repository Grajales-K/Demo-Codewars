// 8 kyu Duck Duck Goose

// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

// Task:

// Given an array of Player objects and a position (first position is 1), return the name of the chosen Player.
// name is a property of Player objects, e.g Player.name

// Example:

// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name

// Random input limits:

// 6 ≤ Players ≤ 50
// 5000 ≤ Position ≤ 50000

function duckDuckGoose(players, goose) {
  let number = goose - 1;

  let numberInCircle = number % players.length;

  let playerChosen = players[numberInCircle];

  return playerChosen.name;
}

function duckDuckGoose(players, goose) {
  let player = players;
  let num = goose;

  return player[(num - 1) % player.length].name;
}


const players = [
  { name: 'a' }, // índice 0
  { name: 'b' }, // índice 1
  { name: 'c' }, // índice 2
  { name: 'd' }, // índice 3
  { name: 'c' }, // índice 4
  { name: 'e' }, // índice 5
  { name: 'f' }, // índice 6
  { name: 'g' }, // índice 7
  { name: 'h' }, // índice 8
  { name: 'z' }  // índice 9
];

console.log('----------- Testing duckDuckGoose -----------\n');

const testCases = [
  { goose: 1, expected: 'a' },
  { goose: 3, expected: 'c' },
  { goose: 10, expected: 'z' },
  { goose: 20, expected: 'z' },
  { goose: 30, expected: 'z' },
  { goose: 18, expected: 'g' },
  { goose: 28, expected: 'g' },
  { goose: 12, expected: 'b' },
  { goose: 2, expected: 'b' },
  { goose: 7, expected: 'f' }
];

testCases.forEach(({ goose, expected }, index) => {
  const result = duckDuckGoose(players, goose);
  
  const realArrayIndex = (goose - 1) % players.length;
  const passed = result === expected;

  console.log(`Test #${index + 1}: Goose chosen: ${goose} | array index: ${realArrayIndex}`);
  console.log(
    `result: "${result}" | expected: "${expected}" | ${
      passed ? '✅ PASS' : '❌ FAIL'
    }\n`
  );
});