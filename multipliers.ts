let array:number[]=[1,2];
let k:number=3;
let multiplier:number=4;
let min:number=0

    for(let i=0;i<k;i++){
        min=0
        for(let j=1;j<array.length;j++){
            if(array[min]>array[j]){
                min=j;   
            }
        }
        array[min]=array[min]*multiplier;
    }
console.log(array);
