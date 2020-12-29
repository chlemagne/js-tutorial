// JS Prototype Demo

// Shape object
function Shape() {
}

// Shape.prototype members ares ``static`` and ``class``
// members in Java and Python, respectively.
Shape.prototype.duplicate = function() {
    console.log(`Duplicating shape...`);
}

// Circle object
function Circle(radius) {
    this.radius = radius;
}

// Circle object extends Shape object
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// Add method to Circle.prototype
Circle.prototype.draw = function() {
    console.log(`Drawing a circle with radius <${this.radius}>...`);
}
