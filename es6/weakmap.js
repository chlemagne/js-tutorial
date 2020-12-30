// ES6 JS WeakMap

const _radius = new WeakMap();
const _calculateDiameter = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);

        // Use arrow function to inherit ``this``
        _calculateDiameter.set(this, () => {
            return 2 * _radius.get(this);
        });
    }

    draw() {
        const diameter = _calculateDiameter.get(this)();
        console.log(`Drawing circle D=${diameter}...`);
    }
}
