// Typescript Classes

class Point {
    constructor(private x: number, private y: number, private isMidpoint?: boolean) {
    }

    draw() {
        console.log(`Drawing (${this.x}, ${this.y})...`);
    }

    getDistance(another: Point) {
        console.log(`Calculating distance between (${this.x}, ${this.y}) and (${another.x}, ${another.y})...`);
    }
}

const point = new Point(1, 1);
point.draw();
point.getDistance(new Point(2, 2, true));
