// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.
// Return the number of consistent strings in the array words.
var stringarray = ["ad", "bd", "aab", "baa", "abdaa"];
var teststring = "ab";
var strary = "";
var char = "";
var stringarray1 = [];
for (var i = 0; i < stringarray.length; i++) {
    strary = stringarray[i];
    for (var j = 0; j < strary.length; j++) {
        char = strary.charAt(j);
        if (!(teststring.includes(char))) {
            stringarray1.push(strary);
            break;
        }
    }
}
console.log(stringarray.length - stringarray1.length);
