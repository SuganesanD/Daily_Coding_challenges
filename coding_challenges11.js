"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stringinput = "abcabc";
var finalstring = [];
for (var i = 0; i < stringinput.length; i++) {
    for (var j = i + 1; j < stringinput.length; j++) {
        if (stringinput[i] == stringinput[j]) {
            finalstring.push(stringinput[i]);
            console.log(finalstring);
        }
    }
}
console.log(finalstring);
console.log(finalstring.length);
