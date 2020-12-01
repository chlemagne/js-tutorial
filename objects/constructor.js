// Constructor Functions

function Circle(radius) {
    this.radius = radius;
    this.diameter = function () {
        return 2 * this.radius;
    }

    // JS automatically calls line below
    // return this;
}

/*
    JS ``new`` keyword performs three (3) tasks:
        1. ``new MyObject()`` -> const x = {};
        2. ``this`` points to the newly created empty object
        3. Returns this from the function MyObject()
*/
const circle = new Circle(15);
console.log(circle.radius)
console.log(circle.diameter())

circle.isVisible = false;
console.log(circle.isVisible)

// delete keyword does not violate the ``const`` access modifier
delete circle.isVisible
console.log(circle.isVisible)

console.log(circle.constructor) // [Function: Circle]
console.log(Circle.constructor) // [Function: Function]

const empty = {};
const empty2 = new Object();
console.log(empty.constructor);     // [Function: Object]
console.log(empty2.constructor);    // [Function: Object]