let array:number[]=[1,2,3,6,4,2,0,4];
let k:number=6
let sum:number=0
let count:number=0
for(let i=0;i<array.length;i++){
    if(array[i]==k){
        count++
    }
    sum+=array[i]
    for(let j=i+1;j<array.length;j++){
        sum+=array[j]
        if(sum==k){
            count++
        }
    }
    sum=0
}
console.log(count);
