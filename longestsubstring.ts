let string:string="abcabcbb"
let stringarray:string[]=string.split("");
let temparray:string[]=[]
let finalarray:string[]=[]
let flag=0
console.log(stringarray);
temparray.push(stringarray[0])


for(let i=1;i<string.length;i++){
    for(let j=0;j<temparray.length;j++){
    if(stringarray[j]!=stringarray[i]){
       flag=1;
         
    }
    else{
        flag=0
    }
}
if(flag==1){
    temparray.push(stringarray[i])
}
    else{
        console.log(temparray.join(""));
        
        finalarray.push(temparray.join());
        temparray=[""]
        console.log(temparray);
        
    }

}
console.log(finalarray);
