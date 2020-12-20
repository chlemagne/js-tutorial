// Sort JS Arrays

const numbers = [5, 2, 8, 0, 9];

// sorting primitive values
numbers.sort();
numbers.reverse();

// sorting objects
const courses = [
    { id: 1, name: 'Z' },
    { id: 2, name: 'h' },
]

courses.sort( (a, b) => {
    const aName = a.name.toUpperCase();
    const bName = b.name.toUpperCase();

    if (aName < bName) return -1;
    if (aName > bName) return 1;
    return 0;
});
console.log(courses);