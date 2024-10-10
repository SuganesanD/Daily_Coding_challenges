//find the longest substring with no repeating characters in it.
var stringinput = "abcabcde";
var string = [];
var finalstring = [];
var n = 0;
var i = 0;
while (i < stringinput.length) {
    string.push(stringinput[i]);
    for (var j = i + 1; j < stringinput.length; j++) {
        if (stringinput[i] != stringinput[j]) {
            string.push(stringinput[j]);
            finalstring = string;
            if (j == stringinput.length - 1) {
                i = stringinput.length + 1;
            }
        }
        else {
            string = [];
            break;
        }
    }
    i++;
}
console.log(finalstring.length);
