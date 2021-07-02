let a = 6;
let b = 2;
let n = 1;
let x = 5;

function add(a , b) {
    let ans = a + b;
    return ans;
}
function subtract(a , b) {
    let ans = a - b;
    return ans;
}

function multiply(a , b) {
    let ans = a * b;
    return ans;
}

function divide(a , b) {
    let ans = a / b;
    return ans;
}
function increment(n) {
    return n += 1;
}
function decrement(n) {
    return n-= 1;
}
function makeInt(n) {
    return parseInt(n , 10);
}
function preserveDecimal(n) {
    return parseFloat(n , 10);
}

add(a , b);

subtract(a , b);

multiply(a , b);

divide(a , b);

increment(n);

decrement(n);

makeInt(n);

preserveDecimal(n);