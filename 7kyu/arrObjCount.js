// 7 kyu
// Coding Meetup #1 - Higher - Order Functions Series - Count the number of JavaScript developers 
// coming from Europe

// Description:
// You will be given an array of objects(hashes in ruby) representing data about developers who 
// have signed up to 
// attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

// For example, given the following list:

var list = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

function countDevelopers(list) {
    let count = 0;

    for (dev of list) {
        if (dev.continent === 'Europe' && dev.language === 'JavaScript') {
            count++;
        }
    }
    return count;
}

console.log(countDevelopers(list));