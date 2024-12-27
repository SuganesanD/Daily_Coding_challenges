var n = 6;
for (var i = 1; i <= n; i++) {
    for (var j = 0; j < n; j++) {
        if (j >= n - i) {
            process.stdout.write("#");
        }
        else {
            process.stdout.write(" ");
        }
    }
    console.log();
}
