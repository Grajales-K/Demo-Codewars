// having an array of objects, return an array of names (the name property of each object).

function getNames(data) {
  let names = [];
  for (let item of data) {
    names.push(item.name); 
  }
  return names; 
}

// Alternative solution using map for role instead of name
// const getNames = (data) => data.map((item) => item.role);


// Test cases
const devTeam = [
  { id: 101, name: "Diego", role: "Fullstack", seniority: "Mid" },
  { id: 102, name: "Elena", role: "Backend", seniority: "Senior" },
  { id: 103, name: "Santi", role: "Frontend", seniority: "Junior" }
];


console.log(getNames(devTeam)); 
// Output: ["Diego", "Elena", "Santi"]