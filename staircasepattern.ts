let n:number=6;
for(let i=1;i<=n;i++){
    for(let j=0;j<n;j++){
        if(j>=n-i){
            process.stdout.write("#")
        }
        else{
            process.stdout.write(" ")
        }  
    }
    console.log();
}