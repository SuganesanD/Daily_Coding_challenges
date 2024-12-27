var array1 = [5, 6, 3];
var array2 = [6, 6, 2];
var arrayscore = [];
if (array1.length == array2.length) {
    for (var i = 0, j = 0; i < array1.length; i++, j++) {
        if (array1[i] > array2[j]) {
            arrayscore.push(1);
        }
        else if (array1[i] < array2[j]) {
            arrayscore.push(1);
        }
        else {
            arrayscore.push(0);
        }
    }
}
console.log(arrayscore);
