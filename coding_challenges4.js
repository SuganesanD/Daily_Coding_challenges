"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r.question("enter the number a and b ", function (n) {
    var vall = Number(n);
    for (var i = 1; i <= vall; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        else {
            console.log(i);
        }
    }
});
