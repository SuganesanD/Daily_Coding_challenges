var array1 = [2, 3, 4, 5, 1, 2, 4];
var array2 = [7, 8, 3, 2, 9, 4, 9, 10];
for (var i_1 = 0; i_1 < array2.length; i_1++) {
    array1.push(array2[i_1]);
}
array1.sort(function (a, b) { return a - b; });
console.log(array1);
var testarray = [];
var i = 0;
var n = array1.length;
for (var i_2 = 0, j = 1; j < n; i_2++, j++) {
    if (array1[i_2] != array1[j]) {
        testarray.push(array1[i_2]);
    }
    else {
        continue;
    }
}
if (array1[n - 2] != array1[n - 1]) {
    testarray.push(array1[n - 1]);
}
else {
    testarray.push(array1[n - 1]);
}
console.log(testarray);
