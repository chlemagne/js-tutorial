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