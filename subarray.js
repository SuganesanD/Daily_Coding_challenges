var array = [1, 2, 3, 6, 4, 2, 0, 4];
var k = 6;
var sum = 0;
var count = 0;
for (var i = 0; i < array.length; i++) {
    if (array[i] == k) {
        count++;
    }
    sum += array[i];
    for (var j = i + 1; j < array.length; j++) {
        sum += array[j];
        if (sum == k) {
            count++;
        }
    }
    sum = 0;
}
console.log(count);
