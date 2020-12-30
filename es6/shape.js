// ES6 (ES2015)

const _radius = new WeakMap();

// NOTE: class declaration (body) is NOT hoisted
// NOTE: class declaration implicitly runs in ``strict`` mode
// NOTE: Shape cannot be invoked without 'new'
class Shape {
    constructor(color="black") {
        this.color = color;
    }

    // prototype method
    move() {
        console.log(`Moving shape with color <${this.color}>...`);
    }

    // JS static method
    static parse(json) {
        const color = JSON.parse(json).color;
        return new Shape(color);
    }
}

// Shape child class
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        _radius.set(this, radius);
    }

    get radius() {
        return _radius.get(this);
    }

    get diameter() {
        return 2 * _radius.get(this);
    }

    // Override super move() method
    move() {
        super.move();
        console.log(`Moving circle with radius <${this.radius}>...`);
    }
}

// ES6 class static method demo
const s = Shape.parse('{ "color": "yellow" }');
