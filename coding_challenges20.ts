var input=require('prompt-sync')();
var gender=input("enter gender:").toLowerCase();
var age=input("enter the age:").toLowerCase();
if(gender=="male"){
    if(Number(age)>=20 && Number(age)<40){
        console.log("anywhere");
        

    }
    else if(Number(age)>=40 && Number(age)<=60){
        console.log("urban");
        
    }
    else{
        console.log("error");
        
    }
    
}
if(gender=="female"){
    console.log("urban");
    
}

