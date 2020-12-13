// Constructor Functions

function Circle(radius) {
    this.radius = radius;
    this.diameter = function () {
        return 2 * this.radius;
    }
    this.isEqualTo = function(other) {
        return this.radius === other.radius;
    }
    this.isCopyOf = function(other) {
        return this === other;
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

// object equality
smallCircle1 = new Circle(5);
smallCircle2 = new Circle(5);
bigCircle1 = new Circle(10);
bigCircle2 = bigCircle1;

console.log("Object equality")
console.log(smallCircle1.isEqualTo(smallCircle2))
console.log(smallCircle1.isCopyOf(smallCircle2))
console.log(smallCircle1.isEqualTo(bigCircle1))
console.log(bigCircle2.isEqualTo(bigCircle1))
console.log(bigCircle2.isCopyOf(bigCircle1))