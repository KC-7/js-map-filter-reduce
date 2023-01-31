# Advanced JavaScript: Map, Filter & Reduce

A mini project to test JavaScript Map, Filter and Reduce in Terminal

## To use this Repository
To run the code in Gitpod, use the command `node map.js` in the terminal.

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

