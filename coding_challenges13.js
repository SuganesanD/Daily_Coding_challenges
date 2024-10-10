// find the longest palindrome in the substring of the given string
var string = "akunb";
var finalstring = "";
var flag = 0;
var finalarray = [];
var max = 0;
var maxstring = '';
for (var i_1 = 0; i_1 < string.length; i_1++) {
    for (var j = i_1; j < string.length; j++) {
        for (var k = i_1; k <= j; k++) {
            finalstring += string[k];
        }
        finalarray.push(finalstring);
        //console.log(finalstring);
        finalstring = "";
    }
    //console.log(" ");
}
//console.log(finalarray)
for (var len = 0; len < finalarray.length; len++) {
    var i = 0;
    var j = finalarray[len].length - 1;
    //console.log(j)
    flag = 0;
    while (i <= j) {
        if ((finalarray[len])[i] == (finalarray[len])[j]) {
            flag = 1;
        }
        else {
            flag = 0;
            break;
        }
        i++;
        j--;
    }
    if (flag == 1) {
        //console.log("yes")
        if (max < finalarray[len].length) {
            max = finalarray[len].length;
            maxstring = finalarray[len];
        }
    }
}
console.log("The logest palindeome sub string's length is ".concat(max, ", ").concat(maxstring));
