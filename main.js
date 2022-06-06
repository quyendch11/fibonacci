"use strict";
exports.__esModule = true;
var fibonasi_1 = require("./fibonasi");
var fibonacci3 = [];
for (var i = 0; i < 10; i++) {
    var fibonacci2 = new fibonasi_1.Fibonacci(i);
    fibonacci3.push(fibonacci2.fibonacci(i));
}
//console.log(fibonacci3)
function sum() {
    var fibonacci3 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fibonacci3[_i] = arguments[_i];
    }
    var sum1 = 0;
    for (var _a = 0, fibonacci3_1 = fibonacci3; _a < fibonacci3_1.length; _a++) {
        var i = fibonacci3_1[_a];
        sum1 += i;
    }
    return sum1;
}
console.log(sum.apply(void 0, fibonacci3));
