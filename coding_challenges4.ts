import * as readline from 'readline';
const r=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

r.question("enter the number  ",(n:string)=>{
    var vall:number=Number(n);
for(let i=1;i<=vall;i++){
    if( i%3==0 && i%5==0){
        console.log("FizzBuzz");  
    }
    else if(i%5==0){
        console.log("Buzz");
    }

    else if(i%3==0){
        console.log("Fizz");
        
    }
    else{
        console.log(i);
        
    }
}
});