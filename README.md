# Advanced JavaScript: Map, Filter & Reduce

A mini project to test JavaScript Map, Filter and Reduce in the Terminal.
It is well documented for future reference. 

## How to use this repository
To run the code in Gitpod, use the command `node [FILENAME.js]` in the terminal. 
**Tip** - Dont forget to change the file name!

-----------------------

## Table of Contents

- [Advanced JavaScript: Map, Filter & Reduce](#advanced-javascript--map--filter---reduce)
  * [How to use this repository](#how-to-use-this-repository)
  * [Table of Contents](#table-of-contents)
  * [The `map()` Method](#the--map----method)
    + [What is the map() function?](#what-is-the-map---function-)
    + [What this section shows you?](#what-this-section-shows-you-)
    + [The Map Challenge](#the-map-challenge)
    + [map.js Terminal Output](#mapjs-terminal-output)
  * [The `filter()` Method](#the--filter----method)
    + [What is the filter() function?](#what-is-the-filter---function-)
    + [What this section shows you?](#what-this-section-shows-you--1)
    + [The Filter Challenge](#the-filter-challenge)
    + [filter.js Terminal Output](#filterjs-terminal-output)
  * [The `reduce()` Method](#the--reduce----method)
    + [What is the reduce() function?](#what-is-the-reduce---function-)
    + [What this section shows you?](#what-this-section-shows-you--2)
    + [The Reduce Challenge](#the-reduce-challenge)
    + [reduce.js Terminal Output](#reducejs-terminal-output)

-----------------------

## The `map()` Method

### What is the `map()` function?
The `map()` function is a higher-order function in JavaScript that allows you to transform an array into a new one, by applying a callback function to each of its elements.

The `map()` function returns a new array, where each element has been transformed based on the logic defined in the callback function. The original array remains unchanged.

### What this section shows you?
The code examples in the "map.js" file show the following variations of using the `map()` function:

- Using a for loop
- Using the map() function with a callback function defined as a named function
- Simplified version using map() with a callback function defined using an anonymous function
- Simplified version using map() with a callback function defined using an arrow function
- Using map() with objects

In addition to transforming arrays with numbers, the code also demonstrates how to transform arrays with objects.

### The Map Challenge

You will use destructuring assignment to create two variables and you will assign them values from calling the map method on the students array. The function provided to the map method can either be created within the map method or outside and passed in but in either case, it should use an arrow function. 
The map method should return an array for each item in the students array and this new array should contain two items the items name value and the items results value.
- Create variables named john and rest using the destructuring assignment
- Assign the variables values from calling the map method on the students array
- Within the map method either use an arrow function or provide a function created outside of the map method (note this function should also be an arrow function)
- Log out the variable named: john to see its value
- Log out the variable named: rest to see its value

### map.js Terminal Output

    gitpod /workspace/js-map-filter-reduce (main) $ node map.js

    Using a for loop  [ 2, 4, 6, 8, 10 ]
    Using map()  [ 2, 4, 6, 8, 10 ]
    Simplified w/ map()  [ 2, 4, 6, 8, 10 ]
    Simplfied w/ map() + arrow function  [ 2, 4, 6, 8, 10 ]
    Map() with objects  [ [ 'Mark', 1 ], [ 'Ariel', 2 ], [ 'Jason', 3 ] ]
    -------------------------------------------------------------------
    The Map Challenge
    john: [ 'John', { maths: 90, english: 75, cad: 87 } ]
    rest: [
    [ 'Emily', { science: 93, english: 80, art: 95 } ],
    [ 'Adam', { science: 93, maths: 77, art: 95 } ],
    [ 'Fran', { science: 93, english: 87, art: 95 } ]
    ]

-----------------------

## The `filter()` Method

### What is the `filter()` function?
The `filter()` function is a higher-order function in JavaScript that allows you to filter out elements from an array that do not match a certain condition, as defined in the callback function.

The `filter()` function returns a new array, where only the elements that pass the condition specified in the callback function have been included. The original array remains unchanged.

### What this section shows you?
The **Simple Filtering** section of the code demonstrates how to filter an array of people objects based on the specified conditions. In this case, the filter method is used to extract two different sets of people from the original array.

- The first filter method call looks for people whose age is greater than or equal to 21, and the result is stored in the over21 variable. 
- The second filter method call looks for people whose name is 'Paul' and the result is stored in the paul variable.

The **Complex Filtering** section of the code demonstrates how to filter an array of student objects, with a nested skills array within each student object. The goal is to extract the students who have at least one skill with 5 years or more experience.

There are three different versions of the filter method implementation demonstrated in this section:
- Ver 1: uses the filter method on the student's skills array, and checks if the length of the filtered array is greater than zero.
- Ver 2: uses the some method to check if at least one skill in the skills array has 5 years or more experience.
- Ver 3: uses the find method to check if there is at least one skill in the skills array with 5 years or more experience.

**Note:** Version 1 & 2 of the filter method are commented out, but can be uncommented and run in the terminal to see the results.

### The Filter Challenge

You will create a single line of code that should filter the students array and return only the items whos maths scores are greater than or equal to  90.  As this needs to be done in a single line of code, you will also be required to use an arrow function that does not have a return statement.
- Create a variable named: topMaths using the const keyword
- Assign it a value from using the filter method on the students array
- Use a single line arrow function within the filter method (should not use a return statement)
- Log out the variable topMaths

### filter.js Terminal Output

    gitpod /workspace/js-map-filter-reduce (main) $ node filter.js

    Simple Filter 21 or over  [ { name: 'Michael', age: 23 } ]
    Simple Filter people with name Paul  [ { name: 'Paul', age: 18 } ]
    Complex Filter candidate with over 5 Years Experience  [
    {
        id: 1,
        name: 'Mark',
        profession: 'Developer',
        skills: [ [Object], [Object], [Object] ]
    },
    {
        id: 3,
        name: 'Jason',
        profession: 'Designer',
        skills: [ [Object], [Object], [Object] ]
    }
    ]
    [ 'Mark', 'Jason' ]
    -------------------------------------------------------------------
    The Filter Challenge:
    Filter Challenge Solution  [
    {
        name: 'John',
        subjects: [ 'maths', 'english', 'cad' ],
        teacher: { maths: 'Harry', english: 'Joan', cad: 'Paul' },
        results: { maths: 90, english: 75, cad: 87 }
    },
    {
        name: 'Adam',
        subjects: [ 'science', 'maths', 'art' ],
        teacher: { science: 'Iris', maths: 'Harry', art: 'Simon' },
        results: { science: 84, maths: 97, art: 95 }
    }
    ]

-----------------------

## The `reduce()` Method

### What is the `reduce()` function?
The `reduce()` method takes an array and reduces it to a single value by iterating over its elements and applying a function to each element.

### What this section shows you?
Summing an array of numbers: It shows how to sum the elements of an array using the reduce method. It includes four different versions of the code, each providing a different level of detail in the output.

Totaling a specific object property: It shows how to calculate the total experience of a team using the reduce method. It sums the years of experience of each team member.

Grouping by a property, and totaling it too: It shows how to group the team members based on their profession and calculate the total experience for each profession.

### The Reduce Challenge
You will use the reduce method to execute a function on each item resulting in a single object. The object should be that of the student with the highest english score and should show the student's name and english score.

You can either create the arrow function within the reduce method. or create an arrow function outside and pass it into the reduce method.

Keep an eye open for spots to use destructuring, You will not be tested to see if you have done this, but it would be good for getting in more practice.

- Create a variable named biggest using the keyword const
- Assign it a value from using the reduce method on the students array
- Use either an arrow function inside the reduce method, or create a function and pass it into the reduce method
- Use a default value with the reduce method
- Log out the variable biggest to see the value

Answer: `{ name: 'Adam', max: 88 }`

### reduce.js Terminal Output

    gitpod /workspace/js-map-filter-reduce (main) $ node reduce.js

    Accumulator: 0 Current Value: 0 Total: 0
    Accumulator: 0 Current Value: 1 Total: 1
    Accumulator: 1 Current Value: 2 Total: 3
    Accumulator: 3 Current Value: 3 Total: 6
    Accumulator: 6 Current Value: 4 Total: 10
    Final Value: 10
    ----------------------------------------------------------------
    Total Team Experience in Years:  25
    ----------------------------------------------------------------
    Team Experience by Profession:  { Developer: 12, Designer: 4, Manager: 9 }
    ----------------------------------------------------------------
    Student with highest english score:  { name: 'Adam', max: 88 }

-------------------------

## Final Summary

This repository contains a project that demonstrates the use of `map()`, `filter()`, and `reduce()` functions in JavaScript. The `map()` function transforms an array by applying a callback function to each element and returns a new array. The `filter()` function filters elements from an array that do not match a certain condition and returns a new array with only elements that pass the condition. The `reduce()` function reduces an array to a single value by applying a callback function to the elements of the array. The code in the repository demonstrates how to use these functions with arrays and objects, and includes challenges to practice using the functions.

-------------------------

## Credits

- <small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

- <small><i><a href='https://chat.openai.com/chat'>Readme partialy created by utilising ChatGPT</a></i></small>

- <small><i><a href='https://codeinstitute.net/global/'>Content Learned in Code Institute</a></i></small>