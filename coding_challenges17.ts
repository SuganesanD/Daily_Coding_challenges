//anagram
import * as readline from 'readline';
const r=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
r.question("enter the string" ,(n:string)=>{
var string1:string=n;
var string2:string="silent"
var string3:String="abi"
var string3fin
var string1fin=string1.split('').sort().join()
var string2fin=string2.split('').sort().join()
if(string1fin==string2fin){
    console.log("anagram");   
}
});


        