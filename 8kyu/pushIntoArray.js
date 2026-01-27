// You are trying to put a hash in ruby or an object in 
// javascript or java into an array, but it always returns 
// error, solve it and keep it as simple as possible!


// array prototype push()  add the specified elements to 
// the end of an array and returns the new length of the array.

items = []; //empty array
// items.push{ a: "b", c: "d" };  //fix this line
items.push({ a: "b", c: "d" });

console.log(items);


// example

const animals = ["pigs", "goats", "sheep"];

const count = animals.push("cows");
console.log(count, animals);   // 4 ["pigs", "goats", "sheep", "cows"]