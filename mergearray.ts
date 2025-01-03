let array1:number[]=[2,3,4,5,1,2,4];
let array2:number[]=[7,8,3,2,9,4,9,10]
for(let i=0;i<array2.length;i++){
    array1.push(array2[i])
}
array1.sort((a,b)=>a-b)
console.log(array1);

let testarray:number[]=[]
let i=0
let n=array1.length
for(let i=0,j=1;j<n;i++,j++){
    if(array1[i]!=array1[j]){
        testarray.push(array1[i])
    }
    else{
        continue
    }
}
if(array1[n-2]!=array1[n-1]){
    testarray.push(array1[n-1])
}
else{
    testarray.push(array1[n-1])
}
console.log(testarray);
