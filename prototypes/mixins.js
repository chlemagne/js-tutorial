// JS Mixin Design Pattern

// Mixin helper function
function mixin(Target, ...sources) {
    Object.assign(Target.prototype, ...sources);
}


// sources
const canEat = {
    eat: function() {
        this.stamina++;
        console.log("Eating...")
    }
};

const canWalk = {
    walk: function() {
        this.stamina--;
        console.log("Walking...");
    }
};

const canSwim = {
    swim: function() {
        this.stamina--;
        console.log("Swimming...");
    }
};


// objects
function Person() {
    this.stamina = 0;
}

function Fish() {
    this.stamina = 0;
}

mixin(Person, canEat, canWalk, canSwim);
mixin(Fish, canEat, canSwim);
