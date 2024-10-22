var string1 = "cdabce";
var string2 = "abcdec";
var len1 = string1.length;
var len2 = string2.length;
var lar = 0;
if (len1 < len2) {
    lar = len1;
}
else {
    lar = len2;
}
for (var i = 0; i < string1.length; i++) {
    for (var j = 0; j < string2.length; j++) {
        while (string1[i] == string2[j]) {
            console.log(string1[i]);
            console.log("----");
            i++,
                j++;
        }
    }
}
