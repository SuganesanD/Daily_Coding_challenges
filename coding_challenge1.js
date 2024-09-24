/*Input a string of alphabets. Find out the number of occurrence of all alphabets in that string.
Find out the alphabet with maximum occurrence*/
//declaring
var teststring = "aeroplane";
var count = 0;
var len = teststring.length;
var largest = 0;
var temp = 0;
var alpha_largest;
var final_array = [];
var single_array = [];
console.log("The occerence of single character in the string is:");
//comparing
for (var i = 0; i < len; i++) {
    for (var j = 0; j < len; j++) {
        if (teststring[i] == teststring[j]) {
            count++;
        }
    }
    console.log(teststring[i], count);
    temp = count;
    if (temp >= largest) {
        largest = temp;
        final_array.push(teststring[i]);
    }
    count = 0;
    alpha_largest = teststring[i];
    single_array.push(teststring[i]);
}
console.log();
final_array.slice(0, len / 2);
//printing
console.log("largest occurence value is:".concat(largest));
console.log("The largest occurence alphabets are:");
for (var len_1 = 0; len_1 < final_array.length / 2; len_1++) {
    console.log(final_array[len_1]);
}
