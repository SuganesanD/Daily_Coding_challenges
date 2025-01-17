var array1 = [1, 3, 5, 6];
var target = 7;
var a = 0;
for (var i = 0; i < array1.length; i++) {
    if (target == array1[i]) {
        console.log(i);
        break;
    }
    else if (array1[i] > target) {
        console.log(i);
        break;
    }
}
if (array1[array1.length - 1] < target) {
    console.log(array1.length);
}
