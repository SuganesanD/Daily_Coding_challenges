var ballstring = "101";
var ballarray = [];
var count = 0;
for (var i = 0; i < ballstring.length; i++) {
    ballarray[i] = Number(ballstring[i]);
    if (ballarray[i] == 0) {
        count++;
    }
}
if (ballarray[0] == 0) {
    count--;
}
console.log(count);
