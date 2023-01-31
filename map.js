/**
 * To run this file in Gitpod, use the 
 * command 'node map.js' in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}
console.log("Using a for loop ", results)

// Using map()
const multByTwo = function (num) {
  return num * 2;
};

const mapResults = nums.map(multByTwo);
console.log("Using map() ", mapResults);

// Simplified w/ map()
const simplified = nums.map(function (num) { return num * 2 });
console.log("Simplified w/ map() ", simplified)

// Simplfied w/ map() + arrow function
const double = nums.map(num => num * 2);
console.log("Simplfied w/ map() + arrow function ", double);

// With objects:
const students1 = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithIds = students1.map(student => [student.name, student.id]);
console.log("Map() with objects ", studentsWithIds)

// The Map Challenge

// Steps:
// You will use destructuring assignment to create two variables and you will assign them values from calling the map method on the students array. The function provided to the map method can either be created within the map method or outside and passed in but in either case, it should use an arrow function. 
// The map method should return an array for each item in the students array and this new array should contain two items the items name value and the items results value.
// Create variables named john and rest using the destructuring assignment
// Assign the variables values from calling the map method on the students array
// Within the map method either use an arrow function or provide a function created outside of the map method (note this function should also be an arrow function)
// Log out the variable named: john to see its value
// Log out the variable named: rest to see its value


let students = [
  {
      name: 'John',
      subjects: ['maths', 'english', 'cad'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 80, art: 95},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 93, maths: 77, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 87, art: 95},
  }
];

// Solution: 

// Destructuring assignment to create variables `john` and `rest`
let [john, ...rest] = students.map(student => [student.name, student.results]);

// Logging the divider and heading
console.log("-------------------------------------------------------------------");
console.log("The Map Challenge")

// Logging the value of `john`
console.log("john:", john);

// Logging the value of `rest`
console.log("rest:", rest);
