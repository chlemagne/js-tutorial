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

function discountedSum(discount, ...prices) {
    // ``...prices`` is called a Rest operator
    // It's read as "discount and the rest of the parameters"
    // Rest operator must be the last parameter
    const sum = prices.reduce((a, b) => a + b);
    return sum * (1 - discount);
}
discountedSum(0.1, 20, 30, 25);  // 67.5
