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
const numbers = [1, 2, 3, 4, 5];

// clear numbers
numbers.length = 0;
console.log(numbers); // []

// concatenate arrays
const fruits = ["apple", "banana", "mango"];
const vegies = ["cucumber", "lettuce", "radish"];

// [ 'apple', 'banana', 'mango', 'cucumber', 'lettuce', 'radish' ]
console.log(fruits.concat(vegies));

// spread operator
const full = [...fruits, "chicken", "fish", "pork", ...vegies];
console.log(full);

// iterate through arrays
// NOTE: using ``in`` operator will return the index (arrays) and keys (objects).
for (let food of full)
    console.log(food);

// using .forEach() method
console.log("###")
full.forEach((value, index) => console.log(index, value));
console.log("###")

// .every() and .some() methods
const integers = [-2, -1, 0, 1, 2, 3, 4, 5]

const allPositive = integers.every(number => number > 0);  // false
const somePositive = integers.some(number => number > 0);  // true

// filter array elements
const positiveIntegers = integers.filter(n => n >= 0);  // [ 0, 1, 2 ]

// map array elements
function Integer(number) {
    this.number = number;
}
// when using object literal syntax {}, enclose it with parenthesis like below.
// const integersObj = integers.map(n => ({ number: n}));
const integersObj = integers.map(n => new Integer(n));

// chain .filter() and .map() methods
const BASE_10 = 10;
const chained = integers
    .filter(n => n >= 0)
    .map(n => new Integer(n))
    .filter(obj => obj.number > 1)
    .map(obj => "Number " + obj.number.toString(BASE_10));
// chained is logged as [ 'Number 2', 'Number 3', 'Number 4', 'Number 5' ]

// reduce an array; find the sum of variable ``chained``
const INITIAL_VALUE = 0;
const RE_PATTERN = /Number\s(-?\d+)/;
const sum = chained.reduce((prev, curr) => {
    match = curr.match(RE_PATTERN);
    number = (match.length > 0) ? match[1] : 0;
    return prev + parseInt(number);
},
INITIAL_VALUE);
console.log(sum);

// more chaining example
const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 }
];

// [ 'b', 'a' ]
const titles = movies
    .filter(m => m.year === 2018 && m.rating > 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title);
