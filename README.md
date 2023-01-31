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

### map.js Terminal Output

    gitpod /workspace/js-map-filter-reduce (main) $ node map.js

    Using a for loop  [ 2, 4, 6, 8, 10 ]
    Using map()  [ 2, 4, 6, 8, 10 ]
    Simplified w/ map()  [ 2, 4, 6, 8, 10 ]
    Simplfied w/ map() + arrow function  [ 2, 4, 6, 8, 10 ]
    Map() with objects  [ [ 'Mark', 1 ], [ 'Ariel', 2 ], [ 'Jason', 3 ] ]

