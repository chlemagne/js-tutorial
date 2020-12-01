// Basic JS Objects

// Object literal syntax: {}
const circle = {
    radius: 5.0,
    center: {
        x: 0,
        y: 0
    },
    diameter: function () {
        return 2 * this.radius;
    }
}

console.log(circle.diameter())