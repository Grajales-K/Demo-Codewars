const users = require('./users.json');

// 1. IMPORT DATA
// We import the raw JSON file into a constant called 'users'
const users = require('./users.json');
console.log(`--- 📊 Processing ${users.length} Users from Database --- \n`);


// CASE 1: MAP (Data Transformation)
// We create a new array with updated balances and a new 'category' property
const upgradedUsers = users.map((u) => {
  // Creates a NEW array without modifying the original source
  return {
    ...u,
    balance: u.balance + 50, // Adding a $50 bonus to everyone
    category: u.balance > 150 ? 'PREMIUM' : 'BASIC',
    lastUpdate: 2026
  };
});

console.log('--- 🚀 MAP: Transformed Data (First 3) ---');
console.table(upgradedUsers.slice(0, 3), ['id', 'name', 'balance', 'category'],); 






















// ------------------------  CASE 2: FILTER (Selection) ----------------------------

// We filter all users who registered at exactly minute 1
// Keeps elements that return TRUE for the condition
const earlyBirds = users.filter((u) => u.regTime === 1);

console.log(`\n✅ FILTER: Found ${earlyBirds.length} users registered at minute 1.`);

// We use chaining (slice + map) to display only the names of the first 5
const earlyNames = earlyBirds.slice(0, 5).map(u => u.name);
console.log("Top 5 Early Birds Names:", earlyNames);
















// ------------------------  CASE 3: FIND (Specific Search) ------------------------

// We look for the FIRST VIP user who arrived within the first 5 minutes
// Stops execution after the first match is found
const firstVip = users.find((u) => u.regTime <= 5 && u.isVIP === true);

console.log('\n🎯 FIND: First VIP user located:');
console.log(firstVip);
