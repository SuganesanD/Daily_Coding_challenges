//Define a function that takes a union type of string literals. Ensure that you handle all cases using a switch statement, and if an unknown value is passed, it should return a value of type never.

type Color="red"|"green"|"blue"
function check_color(color:Color):string{
    switch(color){
        case "red":
            return  'color that is selected is red'
            
        case "green":
            return  'color that is selected is green'
        case "blue":
            return  'color that is selected is blue'
        default:
            const checking_variable:never=color;
            return checking_variable;       
    }
}
console.log(check_color('red'));
//console.log(check_color('yellow')); returns error