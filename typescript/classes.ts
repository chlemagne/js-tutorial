// Typescript Classes

class Point {
    private x: number;
    private y: number;
    private isMidpoint: boolean;

    constructor(x: number, y: number, isMidpoint?: boolean) {
        this.x = x;
        this.y = y;
        this.isMidpoint = isMidpoint;
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
