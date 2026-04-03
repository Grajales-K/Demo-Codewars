// You are given an array of developer objects.
// Each developer uses one of three languages: Python, Ruby, or JavaScript.

// Your task is to:

// 1. Count how many developers use each language.
// 2. Find the largest group and the smallest group.
// 3. Return true if the largest group is NOT more than twice the size of the smallest group.
// 4. Otherwise, return false.

// For example, given the following input array:


var list1 = [
  {
    firstName: 'Daniel',
    lastName: 'J.',
    country: 'Aruba',
    continent: 'Americas',
    age: 42,
    language: 'Python'
  },
  {
    firstName: 'Kseniya',
    lastName: 'T.',
    country: 'Belarus',
    continent: 'Europe',
    age: 22,
    language: 'Ruby'
  },
  {
    firstName: 'Sou',
    lastName: 'B.',
    country: 'Japan',
    continent: 'Asia',
    age: 43,
    language: 'Ruby'
  },
  {
    firstName: 'Jon',
    lastName: 'B.',
    country: 'Japan',
    continent: 'Asia',
    age: 43,
    language: 'Ruby'
  },
  {
    firstName: 'Hanna',
    lastName: 'L.',
    country: 'Hungary',
    continent: 'Europe',
    age: 95,
    language: 'JavaScript'
  },
  {
    firstName: 'Jayden',
    lastName: 'P.',
    country: 'Jamaica',
    continent: 'Americas',
    age: 18,
    language: 'JavaScript'
  },
  {
    firstName: 'Joao',
    lastName: 'D.',
    country: 'Portugal',
    continent: 'Europe',
    age: 25,
    language: 'JavaScript'
  }
];

// --------------- option 1 -----------------

const isLanguageDiverse = (list) => {
  const languageCount = {};

  for (const dev of list) {
    const lang = dev.language;
    languageCount[lang] = (languageCount[lang] || 0) + 1;
  }

  const counts = Object.values(languageCount);
  const maxCount = Math.max(...counts);
  const minCount = Math.min(...counts);

  return maxCount <= 2 * minCount;
};



// --------------- option 2 -----------------
function isLanguageDiverse1(list) {
  let countJs = 0;
  let countRuby = 0;
  let countPy = 0;

  for (let person of list) {
    if (person.language === 'JavaScript') {
      countJs++;
    } else if (person.language === 'Ruby') {
      countRuby++;
    } else if (person.language === 'Python') {
      countPy++;
    }
  }

  const maxNum = Math.max(countJs, countRuby, countPy); //3
  const minMin = Math.min(countJs, countRuby, countPy); //1
  console.log(maxNum, minMin);

  const doubleNum = minMin * 2;

  if (maxNum <= doubleNum) {
    return true;
  }
  return false;
}


// --------------- option 3 -----------------
function isLanguageDiverse(list) {
  // 1. We create a "counter" object to store how many people speak each language.
  // Note: The keys (Python, Ruby, JavaScript) must match the casing in the data exactly.
  const counts = { Python: 0, Ruby: 0, JavaScript: 0 };

  // 2. We loop through the list and increment the count for the specific language.
  list.forEach((dev) => {
    counts[dev.language]++;
  });

  // 3. We extract just the numbers from our object (e.g., [1, 2, 3]).
  const values = Object.values(counts);

  // 4. We find the "leader" (max) and the "underdog" (min).
  const max = Math.max(...values);
  const min = Math.min(...values);

  // 5. THE LOGIC: If the most popular language is less than or equal to
  // double the least popular one, then the list is balanced (diverse).
  return max <= 2 * min;
}

// console.log(isLanguageDiverse(list1));
console.log(isLanguageDiverse1(list1));

