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
console.log(over21)

// Filter people named "Paul"
const paul = people.filter(person => person.name === 'Paul')
// or you can shorten it as follows: const paul = people.filter(p => p.name === 'Paul')
console.log(paul)


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
console.log(candidates)

// Candidate Names with Min. 5 Years Experience:
console.log(candidates.map(candidate => candidate.name));
