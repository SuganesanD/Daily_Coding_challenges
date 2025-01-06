var array = [1, 2, 3, 4, 5];
var k = 2;
var m = (array.length) - k;
var temp = [];
for (var i = m; i < array.length; i++) {
    temp.push(array[i]);
}
for (var i = 0; i < array.length - k; i++) {
    temp.push(array[i]);
}
console.log(temp);
