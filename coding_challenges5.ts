import * as readline from 'readline';

const r= readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    terminal: true
});

r.question("enter the two values",(n:string)=>{
var a:number=Number(n.split(" ")[0]);
var b:number=Number(n.split(" ")[1]);

console.log(`The value of a and b before swap is ${a} ,${b}`);


console.log("the swapped number are as follows");

a=a^b;
b=a^b;
a=a^b

console.log("After swapping those numbers");

console.log(`a:${a}`);
console.log(`b:${b}`);

});


