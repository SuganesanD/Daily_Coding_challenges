var string1 = "bob is the elle";
var arr = string1.split(" ");
var temp;
var len;
var flag = 0;
for (var i = 0; i < arr.length; i++) {
    temp = arr[i];
    len = temp.length;
    for (var z = 0, j = len - 1; z < j; z++, j--) {
        if (temp[z] == temp[j]) {
            flag = 0;
            continue;
        }
        else {
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        var symbol = [];
        for (var sym = 0; sym < arr[i].length; sym++) {
            symbol.push("*");
        }
        arr[i] = symbol.join("");
    }
}
console.log(arr.join(" "));
