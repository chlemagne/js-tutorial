// Cheatsheat for adding and removing objects/values in JS Arrays
/*
    arr = [1, 2, 3, 4, 5]

    +-------------+---------------------+---------------------+-------------+
    | Method      | Start               | Mid                 | End         |
    +=============+=====================+=====================+=============+
    | Add         | arr.unshift()       | arr.splice()        | arr.push()  |
    +-------------+---------------------+---------------------+-------------+
    | Remove      | arr.shift()         | arr.splice()        | arr.pop()   |
    +-------------+---------------------+---------------------+-------------+
*/

// To empty clear/empty an array, there are four (4) solutions;
// the best solution is shown below. Others have quirks and others are long/messy.
numbers = [1, 2, 3, 4, 5];

// clear numbers
numbers.length = 0;
console.log(numbers); // []

// concatenate arrays
fruits = ["apple", "banana", "mango"];
vegies = ["cucumber", "lettuce", "radish"];

// [ 'apple', 'banana', 'mango', 'cucumber', 'lettuce', 'radish' ]
console.log(fruits.concat(vegies));

// spread operator
full = [...fruits, "chicken", "fish", "pork", ...vegies];
console.log(full);

// iterate through arrays
// NOTE: using ``in`` operator will return the index (arrays) and keys (objects).
for (let food of full)
    console.log(food);

// using .forEach() method
console.log("###")
full.forEach((value, index) => console.log(index, value));
console.log("###")
