//find the longest substring with no repeating characters in it.
var stringinput:string="abcabcde"
var string:string[]=[]
var finalstring:string[]=[]
var n:number=0
var i:number=0
while(i<stringinput.length){
    string.push(stringinput[i])
    for(let j=i+1;j<stringinput.length;j++){
        if(stringinput[i]!=stringinput[j]){
            string.push(stringinput[j])
            finalstring=string 

            if(j==stringinput.length-1){
                i=stringinput.length+1
            }
                   
        }
        else{ 
            string=[]
            
            break;
        }
    }  

    i++
}

console.log(finalstring.length);
