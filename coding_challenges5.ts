var a:number=77;
var b:number=4;

console.log(`The value of a and b before swap is ${a} ,$ {b}`);


console.log("the swapped number are as follows");

a=a^b;
b=a^b;
a=a^b

console.log("After swapping those numbers");

console.log(`a:${a}`);
console.log(`b:${b}`);


