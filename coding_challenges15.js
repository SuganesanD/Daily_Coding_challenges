// You are given a string s consisting only of uppercase English letters.
// You can apply some operations to this string where, in one operation, you can remove any occurrence of one of the substrings "AB" or "CD" from s.
// Return the minimum possible length of the resulting string that you can obtain.
// Note that the string concatenates after removing the substring and could produce new "AB" or "CD" substrings.
var s = "ACBD";
var s1 = "";
var s2 = "";
var len = s.length;
for (var i = 0; i < len; i++) {
    if (s.includes("AB")) {
        s = s.replace("AB", "");
    }
    else if (s.includes("CD")) {
        s = s.replace("CD", "");
    }
    // else{
    //     
    // }
}
console.log("the string is ".concat(s.length));
