"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//anagram
var readline = require("readline");
var r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r.question("enter the string", function (n) {
    var string1 = n;
    var string2 = "silent";
    var string1fin = string1.split('').sort().join();
    var string2fin = string2.split('').sort().join();
    if (string1fin == string2fin) {
        console.log("anagram");
    }
});
