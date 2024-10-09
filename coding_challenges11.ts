import { log } from "console";

var stringinput:string="abcabc"
var finalstring:string[]=[]
for(let i=0;i<stringinput.length;i++){
    for(let j=i+1;j<stringinput.length;j++){
        if(stringinput[i]==stringinput[j]){
            finalstring.push(stringinput[i])
            console.log(finalstring);    
        }
    }  
}
console.log(finalstring);

console.log(finalstring.length);
