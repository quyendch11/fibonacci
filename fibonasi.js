"use strict";
exports.__esModule = true;
exports.Fibonacci = void 0;
var Fibonacci = /** @class */ (function () {
    function Fibonacci(n) {
        this.n = n;
    }
    Fibonacci.prototype.fibonacci = function (n) {
        if (n < 0) {
            return -1;
        }
        else if (n == 0 || n == 1) {
            return n;
        }
        else {
            return this.fibonacci(n - 1) + this.fibonacci(n - 2);
        }
    };
    return Fibonacci;
}());
exports.Fibonacci = Fibonacci;
