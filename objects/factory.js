// Factory Functions

function createCircle(radius) {
    return {
        radius,
        // line below is equivalent to the line above
        // radius: radius
        diameter() {
            return 2 * this.radius;
        }
        // lines below are equivalent to the lines above
        // diameter: function () {
        //     return 2 * this.radius;
        // }
    };
}

const circle = createCircle(12);
console.log(circle.radius);
console.log(circle.diameter())

console.log(circle.constructor)         // [Function: Object]
console.log(createCircle.constructor)   // [Function: Function]