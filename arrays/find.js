// Find Objects in JS Array

const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
    { id: 3, name: 'c'}
];

course = courses.find(course => course.name === 'b');

console.log(course);