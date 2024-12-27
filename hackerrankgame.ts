let array1:number[]=[5,6,3];
let array2:number[]=[6,6,2];
let arrayscore:number[]=[];
if(array1.length==array2.length){
    for(let i=0,j=0;i<array1.length;i++,j++){
        if(array1[i]>array2[j]){
            arrayscore.push(1);
        }
        else if(array1[i]<array2[j]){
            arrayscore.push(1);
        }
        else{
            arrayscore.push(0)
        }
    }

}
console.log(arrayscore);

