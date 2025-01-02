var string = "1111";
var character = "";
var character2 = "";
var zerototal = 0;
var onetotal = 0;
var zero = 0;
var one = 0;
var add = 0;
var value = [];
for (var i = 0; i < string.length; i++) {
    character = string.charAt(i);
    if (character == "0") {
        zerototal += 1;
    }
    else {
        onetotal += 1;
    }
}
for (var j = 0; j < string.length - 1; j++) {
    character2 = string.charAt(j);
    if (character2 == "0") {
        zero += 1;
        add = zero + onetotal;
        value.push(add);
    }
    else {
        onetotal--;
        add = zero + onetotal;
        value.push(add);
    }
}
var max = value[0];
for (var i = 1; i < value.length; i++) {
    if (max < value[i]) {
        max = value[i];
    }
}
console.log(max);
