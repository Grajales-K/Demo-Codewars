const fruits = [
  { name: 'apple', color: 'red', calories: 95 },
  { name: 'banana', color: 'yellow', calories: 105 },
  { name: 'orange', color: 'orange', calories: 62 },
  { name: 'grape', color: 'purple', calories: 3 },
  { name: 'strawberry', color: 'red', calories: 4 }
];

// ------ access to index of the Array and the property

console.log(fruits[0].name); // apple


// --------- forEach() ----------

// fruits.forEach( fruits => console.log(fruits));
fruits.forEach((fruits) => console.log(fruits.name));


// ----- access to all the names of the fruits using forEach() method

fruits.forEach((fruit) => {
  console.log(fruit.name);
});

// ------ add new object to the array

// a good practice you need to push the whole object as the rest of the
// objects in the array, otherwise you will have an array with different types of data which is not a good practice

fruits.push({
  name: 'kiwi',
  color: 'unknown',
  calories: 0
});

console.log(fruits);



// ------- .pop() method removes the last element from an array 
// and returns that element. This method changes the length of the array.

fruits.pop();

console.log(fruits);
// Usa JSON.stringify para que el texto sea legible
// console.log(`${JSON.stringify(fruits)} popped`);


// -------- .splice() method ---------
// changes the contents of an array 
// by removing or replacing existing elements and/or adding new elements in place.

fruits.splice(2, 1); // removes the element at index 2 (orange)
console.log(fruits);

// -------- map() method ---------

const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames); // ['apple', 'banana', 'grape', 'strawberry']

const fruitCalories = fruits.map(fruit => fruit.calories);
console.log(fruitCalories); // [95, 105, 3, 4]


// --------- filter() method ---------

const redFruits = fruits.filter(fruit => fruit.color === 'red');
console.log(redFruits); // [{ name: 'apple', color: 'red', calories: 95 }, { name: 'strawberry', color: 'red', calories: 4 }]

const lowCalorieFruits = fruits.filter(fruit => fruit.calories < 10);
console.log(lowCalorieFruits); // [{ name: 'grape', color: 'purple', calories: 3 }, { name: 'strawberry', color: 'red', calories: 4 }]   



