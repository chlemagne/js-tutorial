// Basic JS Function

// Function Declaration
function walk() {
    console.log('walk');
}

// Named Function Expressin
let run = function run() {
    console.log('run');
}

// Anonymous Function Expression
let swim = function() {
    console.log('swim');
}

let jog = run;
jog();
run();