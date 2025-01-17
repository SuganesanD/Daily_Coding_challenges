let array1:number[]=[1,3,5,6];
let target:number=7;
let a:number=0
for(let i=0;i<array1.length;i++){
    if(target==array1[i]){
        console.log(i);
        break;
        
    }
    else if(array1[i]>target){
        console.log(i);
        break;
    }
   
}
if(array1[array1.length-1]<target){
    console.log(array1.length);
}




