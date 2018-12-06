//  fibonacci

function fib(n){
    if (n > 2) {
        return fib(n - 1) + fib(n - 2);
    }
    else if (n < 1) {
        return 0;
    }
    // else, return 1
    return 1;
}

var n = 3;

console.log(fib(n));
