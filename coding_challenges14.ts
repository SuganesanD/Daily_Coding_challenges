// At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.
// Note that you do not have any change in hand at first.
// Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with the correct change, or false otherwise.

// import * as readline from "readline";
// const r=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });

// r.question("enter the bill")

var billarray:number[]=[5,5,5,20]
var finalararray:number[]=[]
var remaining=0
var flag=0
for(let i=0;i<billarray.length;i++){
    remaining=billarray[i]-5
    console.log(remaining); 
    if(remaining==0){
        finalararray.push(billarray[i])
        console.log(finalararray);   
    }
    else{
        for(let j=finalararray.length-1;j>=0;j--){     
            if(remaining>0){
                remaining-=finalararray[j]  
                console.log(remaining);           
                finalararray.pop()
                console.log(finalararray);
                console.log(billarray[i]);

                finalararray.push(billarray[i])
                flag=1
                console.log(finalararray);  
            }
            else{
                flag=0
            }
        }
    }
    console.log("---------------------------------------");  
}
console.log(finalararray);



