// JS Function Arguments

function add(x, y) {
    // NOTE: x and y params are undefined if not provided by caller
    return x + y; // NaN when adding undefined values
}
add();              // NaN; valid
add(1, 2);          // 3; valid
add(1, 2, 3, 4);    // 3; valid

function sum() {
    let sum = 0;
    for (let x of arguments)  // arguments is an object
        sum += x;

    return sum;
}
sum(1,2,3,4,5);     // 15