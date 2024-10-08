//Define a function that takes a union type of string literals. Ensure that you handle all cases using a switch statement, and if an unknown value is passed, it should return a value of type never.
function check_color(color) {
    switch (color) {
        case "red":
            return 'color that is selected is red';
        case "green":
            return 'color that is selected is green';
        case "blue":
            return 'color that is selected is blue';
        default:
            var checking_variable = color;
            return checking_variable;
    }
}
console.log(check_color('red'));
