

var ballstring:string="101"
var ballarray:number[]=[]
var count:number=0
for(let i=0;i<ballstring.length;i++){
    
    ballarray[i]=Number(ballstring[i])  
    if(ballarray[i]==0){
        count++
    }
}
if(ballarray[0]==0){
    count--
}
console.log(count);


