//print all the substring in the string
var string:string="abcabcded"
var finalstring:string=" "
for(let i=0;i<string.length;i++){
    for(let j=i;j<string.length;j++){
    for(let k=i;k<=j;k++){
        finalstring+=string[k]; 
    }

    console.log(finalstring );
    finalstring=" "
    
}
console.log(" ");

}