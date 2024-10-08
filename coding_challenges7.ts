//define a object name eligibility with properties age and name and check whether the given input is eligible

var eligibility:{
    age:number,
    user_name:string
}
eligibility={
    age:18,
    user_name:"ram"
}

if(eligibility.age==18 && eligibility.user_name=="ram"){
    console.log("he is eligible");
    
}
else{
    console.log("Oops!!! can't access");
    
}
