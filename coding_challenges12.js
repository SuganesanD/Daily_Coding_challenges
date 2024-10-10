"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//print all the substring in the string
var string = "abacabcded";
var finalstring = " ";
var flag = 1;
var finalarray = [];
for (var i = 0; i < string.length; i++) {
    for (var j = i; j < string.length; j++) {
        for (var k = i; k <= j; k++) {
            finalstring += string[k];
        }
        for (var i_1 = 0, j_1 = finalstring.length - 1; i_1 < j_1; i_1++, j_1--) {
            if (finalstring[i_1] == finalstring[j_1]) {
                flag = 1;
                console.log("hello");
            }
            else {
                flag = 0;
                break;
            }
        }
        if (flag == 1) {
            finalarray.push(finalstring);
            console.log("hi");
        }
        console.log(finalstring);
        finalstring = " ";
    }
    console.log(" ");
}
console.log(finalarray);
