//Get the number of month in the year and print the number of days in that month using switch case
var month:number=4;
switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("There are 31 days in this month");
    case 2:
        console.log("There are 28 days in this month");
        
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("There are 30 days in this month");   
}