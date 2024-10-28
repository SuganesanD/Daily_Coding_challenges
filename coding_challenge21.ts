var array: number[] = [1, 2, 1]
var countarray: number[] = []
var duplicatearray: number[] = [1]
var count: number = 0
// for (let i = 0; i < array.length; i++) {
//     for (let z = 0; z < duplicatearray.length; z++) {
//         if (array[i] != duplicatearray[z]){
//             for (let j = 0; j < array.length; j++) {
//                 if (array[i] == array[j]) {
//                     count++
//                 }
//             }
//         duplicatearray.push(array[i])
//         countarray.push(count)
//         count = 0
//         }
//     }
// }
// console.log(countarray);
duplicatearray.push(array[0])
for(let i=0;i<array.length;i++){
    for(let z=0;z<=duplicatearray.length;z++){
        if(array[i]!=duplicatearray[z]){
        console.log("hello");
        console.log(duplicatearray);
        
        
        }
        
    //     if(array[i]!=duplicatearray[z]){
    //         console.log("hello"); 
    //     }
    //     duplicatearray.push(array[i])
    }
    
}
console.log(array);
    