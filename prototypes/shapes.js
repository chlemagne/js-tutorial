// JS Prototype Demo

// Shape object
function Shape() {
}


// Shape.prototype members ares ``static`` and ``class``
// members in Java and Python, respectively.
Shape.prototype.duplicate = function() {
    console.log(`Duplicating shape...`);
}
