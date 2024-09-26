var arr = [1, 2, 3, 2, 3, 4, 1, 5, 6, 7];
var count_arr = [];
var final_count_arr = [];
var count = 1;
var n = 0;
var i = n;
var j = i + 1;
var temp_start = 0;
var max = [];
var max_val = 0;
count_arr.push(arr[0]);
for (var i_1 = 0; i_1 < arr.length; i_1++) {
    if (arr[i_1] < arr[i_1 + 1]) {
        count_arr.push(arr[i_1 + 1]);
    }
    else {
        final_count_arr.push(count_arr);
        count_arr = [];
        count_arr.push(arr[i_1 + 1]);
    }
}
for (var j_1 = 0; j_1 < final_count_arr.length; j_1++) {
    if (final_count_arr[j_1].length > max.length) {
        max = final_count_arr[j_1];
        max_val = max.length;
    }
}
console.log("count ".concat(max.length));
for (var j_2 = 0; j_2 < final_count_arr.length; j_2++) {
    if (final_count_arr[j_2].length == max_val) {
        console.log(final_count_arr[j_2].join(' '));
    }
}
