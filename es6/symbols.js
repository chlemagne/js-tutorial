// ES6 JS Symbols

const _radius = Symbol();
const _calculateDiameter = Symbol();

class Circle {
    constructor(radius) {
        this[_radius] = radius;
    }

    // computed property names; private
    [_calculateDiameter]() {
        return 2 * this[_radius];
    }

    draw() {
        console.log(`Drawing circle D=${this[_calculateDiameter]()}...`);
    }
}
