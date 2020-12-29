// JS Prototype Demo

// Intermediate Function Inheritance
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

// Shape object
function Shape(color) {
    this.color = color;
}

// Shape.prototype members ares ``static`` and ``class``
// members in Java and Python, respectively.
Shape.prototype.duplicate = function() {
    console.log(`Duplicating shape...`);
}

// Circle object
function Circle(radius, color) {
    Shape.call(this, color); // super constructor

    this.radius = radius;
}

// Circle object extends Shape object
extend(Circle, Shape);

// Add method to Circle.prototype
Circle.prototype.draw = function() {
    console.log(`Drawing a circle with radius <${this.radius}>...`);
}
