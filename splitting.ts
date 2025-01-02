let string:string="1111"
let character:string=""
let character2:string=""
let zerototal:number=0
let onetotal:number=0
let zero:number=0
let one:number=0
let add:number=0
let value:number[]=[]
for(let i=0;i<string.length;i++){
    character=string.charAt(i)
    if(character=="0"){
        zerototal+=1
    }
    else{
        onetotal+=1
    }
}
for(let j=0;j<string.length-1;j++){
    character2=string.charAt(j);
    if(character2=="0"){
        zero+=1
        add=zero+onetotal
      
            value.push(add)
        
    }
    else{
    
        
        onetotal--
        add=zero+onetotal

        value.push(add)
        
    }
}

let max=value[0]
for(let i=1;i<value.length;i++){
    if(max<value[i]){
        max=value[i]
    }  
}
console.log(max);






