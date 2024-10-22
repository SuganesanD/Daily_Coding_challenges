var string1:string=" the is hello is is is thirishaa"
var string2:string="is"
var string_array:string[]=string1.split(" ")
var count:number=0
for(let i=0;i<string_array.length;i++){
    if(string2==(string_array[i])){
        count++
    }
}
console.log(count);

