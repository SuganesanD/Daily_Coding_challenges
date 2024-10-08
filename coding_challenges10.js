//add the i value which is initaially 1 and stop when the sum is equal to or greater the 100
var i = 1;
var total = 0;
while (i > 0) {
    total = total + i;
    if (total >= 100) {
        break;
    }
    console.log(total);
    i++;
}
console.log("The loop is stopped");
