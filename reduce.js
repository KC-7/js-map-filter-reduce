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
    }
  ];

// Totaling a specific object property


  
// --------------------------------------------------- Grouping by a property, and totaling it too
