var array = [1, 2];
var k = 3;
var multiplier = 4;
var min = 0;
for (var i = 0; i < k; i++) {
    min = 0;
    for (var j = 1; j < array.length; j++) {
        if (array[min] > array[j]) {
            min = j;
        }
    }
    array[min] = array[min] * multiplier;
}
console.log(array);
