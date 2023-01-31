// The Filter Method

/**
 * To run this file in Gitpod, use the 
 * command 'node filter.js' in the terminal
 */

// ----------------------------------------------------------- Simple Filtering
const people = [
    {
        name: 'Michael',
        age: 23,
    },
    {
        name: 'Lianna',
        age: 16,
    },
    {
        name: 'Paul',
        age: 18,
    },
];

// Filter people 21 or over
const over21 = people.filter(person => person.age >= 21)
console.log("Simple Filter 21 or over ", over21)

// Filter people named "Paul"
const paul = people.filter(person => person.name === 'Paul')
// or you can shorten it as follows: const paul = people.filter(p => p.name === 'Paul')
console.log("Simple Filter people with name Paul ", paul)


// ----------------------------------------------------------- Complex Filtering
const students = [
    {
        id: 1,
        name: 'Mark',
        profession: 'Developer',
        skills: [
            { name: 'javascript', yrsExperience: 1 },
            { name: 'html', yrsExperience: 5 },
            { name: 'css', yrsExperience: 3 },
        ]
    },
    {
        id: 2,
        name: 'Ariel',
        profession: 'Developer',
        skills: [
            { name: 'javascript', yrsExperience: 0 },
            { name: 'html', yrsExperience: 4 },
            { name: 'css', yrsExperience: 2 },
        ]
    },
    {
        id: 3,
        name: 'Jason',
        profession: 'Designer',
        skills: [
            { name: 'javascript', yrsExperience: 1 },
            { name: 'html', yrsExperience: 1 },
            { name: 'css', yrsExperience: 5 },
        ]
    },
];

// Ver 1:

// const candidates = students.filter(student => {
//     let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
//     return strongSkills.length > 0;
// });
// console.log(candidates)

// Ver 2: 

// const hasStrongSkills = student => {
//     let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
//     return strongSkills.length > 0;
// };

// const candidates = students.filter(hasStrongSkills);
// console.log(candidates)

// Ver 3: 

const has5yearsExp = skill => skill.yrsExperience >= 5
const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0;
const candidates = students.filter(hasStrongSkills);
console.log("Complex Filter candidate with over 5 Years Experience ", candidates)

// Candidate Names with Min. 5 Years Experience:
console.log(candidates.map(candidate => candidate.name));


// ----------------------------------------------------------- The Filter Challenge:

// Logging the divider and heading
console.log("-------------------------------------------------------------------");
console.log("The Filter Challenge:")

// Steps:
// Create a variable named: topMaths using the const keyword
// Assign it a value from using the filter method on the students array
// Use a single line arrow function within the filter method (should not use a return statement)
// Log out the variable topMaths


let students1 = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: { maths: 'Harry', english: 'Joan', cad: 'Paul' },
        results: { maths: 90, english: 75, cad: 87 },
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: { science: 'Iris', english: 'Joan', art: 'Simon' },
        results: { science: 93, english: 80, art: 95 },
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: { science: 'Iris', maths: 'Harry', art: 'Simon' },
        results: { science: 84, maths: 97, art: 95 },
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: { science: 'Iris', english: 'Joan', art: 'Simon' },
        results: { science: 67, english: 87, art: 95 },
    }
];

// ----------------------------------------------------------- The Filter Challenge Solution: 

// Step 1 -> 3
const topMaths = students1.filter(student => student.results.maths >= 90);
// Step 4
console.log("Filter Challenge Solution ", topMaths);
