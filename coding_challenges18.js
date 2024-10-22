var string1 = " the is hello is is is thirishaa";
var string2 = "is";
var string_array = string1.split(" ");
var count = 0;
for (var i = 0; i < string_array.length; i++) {
    if (string2 == (string_array[i])) {
        count++;
    }
}
console.log(count);
