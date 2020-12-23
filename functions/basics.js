// Basic JS Function
/*
    Hoisting is JavaScript's default behavior of moving declarations to the top.
*/
/*
    ``let`` vs. ``var`` keywords
    +-------------------+---------------+-----------------+
    |                   | let           | var             |
    +===================+===============+=================+
    | scope             | block-scoped  | function-scoped |
    +-------------------+---------------+-----------------+
    | defined globally  | not attached  | attached        |
    |                   | to window     | to window       |
    +-------------------+---------------+-----------------+
    NOTE: avoid using ``var`` keyword
*/

// Function Declaration
walk(); // allowed
function walk() {
    console.log('walk');
}

// Named Function Expressin
// run(); not allowed
let run = function run() {
    console.log('run');
}

// Anonymous Function Expression
// swim(); not allowed
let swim = function() {
    console.log('swim');
}

let jog = run;
jog();
run();