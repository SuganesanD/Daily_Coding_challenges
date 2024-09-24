/*Input a string of alphabets. Find out the number of occurrence of all alphabets in that string. 
Find out the alphabet with maximum occurrence*/

//declaring

var teststring:string="aeroplane";
var count:number=0;
var len=teststring.length;
var largest:number=0;
var temp:number=0;
var alpha_largest:string;
var final_array:string[]=[];
var single_array:any[]=[];
console.log("The occerence of single character in the string is:");

//comparing
for (let i = 0; i < len; i++) {
    for(let j=0;j< len;j++){
        if(teststring[i]==teststring[j]){
            count++;
        }    
    }
    console.log(teststring[i],count);
    temp=count;
    if(temp>=largest){
        largest=temp;
        final_array.push(teststring[i]);
    }
    count=0;
    alpha_largest=teststring[i];
    single_array.push(teststring[i]);
}

console.log();

final_array.slice(0,len/2);
//printing
console.log(`largest occurence value is:${largest}`);
console.log(`The largest occurence alphabets are:`);
for (let len = 0; len < final_array.length/2; len++) {
    console.log(final_array[len]);
}