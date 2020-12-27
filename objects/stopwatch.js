// Stopwatch JS object

function Stopwatch() {
    const MS_TO_SEC = 1000;

    let start = undefined;
    let duration = 0;

    this.reset = function() {
        duration = 0;
    };

    this.start = function() {
        if (start !== undefined)
            throw new Error("Stopwatch has already started.");

        start = new Date();
    };

    this.stop = function() {
        if (start === undefined)
            throw new Error("Stopwatch is not started.")

        const end = new Date();
        duration += (end - start);

        start = undefined;
    };

    Object.defineProperty(this, "duration", {
        get: function() {
            return duration / MS_TO_SEC;
        }
    });
}