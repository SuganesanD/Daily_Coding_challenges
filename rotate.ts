let array:number[]=[1,2,3,4,5];
let k:number=2;
let m:number=(array.length)-k;
let temp:number[]=[]
for(let i=m;i<array.length;i++){   
    temp.push(array[i]);
}
for(let i=0;i<array.length-k;i++){
    temp.push(array[i])
}
console.log(temp);
