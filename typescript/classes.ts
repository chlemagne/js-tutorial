// Typescript Classes

class Point {
    constructor(private _x: number, private _y: number, private _isMidpoint?: boolean) {
    }

    get isMidpoint() {
        return this._isMidpoint;
    }

    set isMidpoint(value: boolean) {
        this._isMidpoint = value;
    }

    draw() {
        console.log(`Drawing (${this._x}, ${this._y})...`);
    }

    getDistance(another: Point) {
        console.log(`Calculating distance between (${this._x}, ${this._y}) and (${another._x}, ${another._y})...`);
    }
}

const point = new Point(1, 1);
point.draw();
point.getDistance(new Point(2, 2, true));
