// Several methods to clone an object

// source object
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
console.log(circle);

// #1 - traditional loop
let another = {}
for (let key in circle)
    another[key] = circle[key];
console.log(another);

// #2 - ``assign`` method
another = Object.assign({}, circle)
console.log(another);

// #3 - spread operator ``...``
another = { ...circle };
console.log(another);