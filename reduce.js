// The Reduce Method

/**
 * To run this file in Gitpod, use the 
 * command 'node reduce.js' in the terminal
 */


// --------------------------------------------------- Summing an array of numbers:

const nums = [0, 1, 2, 3, 4];

// acc stands for accumulator (value that will be returned from reduce method)
// curr stands for current value

// Ver 1 - Provides Answer Only
// let sum = nums.reduce((acc, curr) => acc + curr);
// console.log(sum)

// Ver 2 - Provides acc, curr and tot for each additional value
// let sum = nums.reduce((acc, curr) => {
//     console.log(
//         "Accumulator:", acc,
//         "Current Value:", curr,
//         "Total:", acc + curr
//     );
//     return acc + curr;
// });
// console.log("Final Value:", sum)

/**
 * Ver 3:
 * Provides acc, curr and tot for each additional value. 
 * Starting from the 0 value. Note: The 0 value can be 
 * changed to change the starting point for the accumulator. 
 */

let sum = nums.reduce((acc, curr) => {
    console.log(
        "Accumulator:", acc,
        "Current Value:", curr,
        "Total:", acc + curr
    );
    return acc + curr;
}, 0);
console.log("Final Value:", sum)

// Ver 4 - Provides Answer Only (with ", 0" added to end of code to prevent issues)
// let sum = nums.reduce((acc, curr) => acc + curr, 0);
// console.log(sum)

// --------------------------------------------------- Totaling a specific object property

console.log("----------------------------------------------------------------")

const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    },
    {
        name: 'Dave',
        profession: 'Manager',
        yrsExperience: 9
      }
  ];

// Totaling a specific object property

let totalExperience = teamMembers.reduce((acc, curr) => acc +curr.yrsExperience, 0);
console.log("Total Team Experience in Years: ", totalExperience)
  
// --------------------------------------------------- Grouping by a property, and totaling it too

// Aim is to display job and the total amount of the teams experience in that specific job
// Expected output: { Developer: 12, Designer: 4 }

console.log("----------------------------------------------------------------")

let experienceByProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] = curr.yrsExperience;
    } else {
        acc[key] += curr.yrsExperience;
    }
    return acc;
}, {});

console.log("Team Experience by Profession: ", experienceByProfession);

// --------------------------------------------------- The Reduce Challenge

console.log("----------------------------------------------------------------")

/**Steps
You will use the reduce method to execute a function on each item resulting in a single object. The object should be that of the student with the highest english score and should show the student's name and english score. 
You can either create the arrow function within the reduce method. or create an arrow function outside and pass it into the reduce method.
Keep an eye open for spots to use destructuring, You will not be tested to see if you have done this, but it would be good for getting in more practice.
- Create a variable named biggest using the keyword const
- Assign it a value from using the reduce method on the students array
- Use either an arrow function inside the reduce method, or create a function and pass it into the reduce method
- Use a default value with the reduce method
- Log out the variable biggest to see the value

Answer: { name: 'Adam', max: 88 } */

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
        results: {science: 93, english: 73, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, english: 88, maths: 97, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

// Solution:

// create a constant variable named `biggest`
const biggest = students.reduce((acc, cur) => {
    // check if the current student's english score is greater than the current maximum score
    if (cur.results.english > acc.max) {
      // if it is, return an object with the current student's name and their english score as the new maximum score
      return { name: cur.name, max: cur.results.english };
    } else {
      // otherwise, return the current maximum score
      return acc;
    }
    // set the default value for `acc` as an object with an empty name and a maximum score of 0
  }, { name: '', max: 0 });
  
  // log out the `biggest` variable to see the result
  console.log("Student with highest english score: ", biggest);
