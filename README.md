# Advanced JavaScript: Map, Filter & Reduce

A mini terminal project to test JavaScript Map, Filter and Reduce in Terminal. Well documented for future reference. 

## To use this Repository
To run the code in Gitpod, use the command `node map.js` in the terminal.

-----------------------

## The `map()` Method

### What is the map() function?
The map() function is a higher-order function in JavaScript that allows you to transform an array into a new one, by applying a callback function to each of its elements.

The map() function returns a new array, where each element has been transformed based on the logic defined in the callback function. The original array remains unchanged.

### What this section shows you?
The code examples in the "map.js" file show the following variations of using the map() function:

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

### What is the filter() function?
The filter() function is a higher-order function in JavaScript that allows you to filter out elements from an array that do not match a certain condition, as defined in the callback function.

The filter() function returns a new array, where only the elements that pass the condition specified in the callback function have been included. The original array remains unchanged.

### What this section shows you?
The **Simple Filtering** section of the code demonstrates how to filter an array of people objects based on the specified conditions. In this case, the filter method is used to extract two different sets of people from the original array.

- The first filter method call looks for people whose age is greater than or equal to 21, and the result is stored in the over21 variable. 
- The second filter method call looks for people whose name is 'Paul' and the result is stored in the paul variable.

The **Complex Filtering** section of the code demonstrates how to filter an array of student objects, with a nested skills array within each student object. The goal is to extract the students who have at least one skill with 5 years or more experience.

There are three different versions of the filter method implementation demonstrated in this section:
- Ver 1: uses the filter method on the student's skills array, and checks if the length of the filtered array is greater than zero.
- Ver 2: uses the some method to check if at least one skill in the skills array has 5 years or more experience.
- Ver 3: uses the find method to check if there is at least one skill in the skills array with 5 years or more experience.
Each version of the filter method is commented out, but can be uncommented and run in the terminal to see the results.

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