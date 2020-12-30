// ES6 (ES2015)

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
}
