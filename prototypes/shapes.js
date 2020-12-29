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

// override Shape.prototype.duplicate method
// NOTE: method override should be declared AFTER extend(). Otherwise,
//       it has no effect as prototype is reset during extend().
Circle.prototype.duplicate = function() {
    Shape.prototype.duplicate.call(this); // call super method

    console.log(`<${this.radius}>, <${this.color}>`);
}

// Add method to Circle.prototype
Circle.prototype.draw = function() {
    console.log(`Drawing a circle with radius <${this.radius}>...`);
}
