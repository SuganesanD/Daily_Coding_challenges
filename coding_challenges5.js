"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});
r.question("enter the two values", function (n) {
    var a = Number(n.split(" ")[0]);
    var b = Number(n.split(" ")[1]);
    console.log("The value of a and b before swap is ".concat(a, " ,").concat(b));
    console.log("the swapped number are as follows");
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    console.log("After swapping those numbers");
    console.log("a:".concat(a));
    console.log("b:".concat(b));
});
