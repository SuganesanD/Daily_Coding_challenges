var string1:string="bob is the elle";
var arr:string []=string1.split(" ");
var temp:string;
var len:number;
var flag:number=0;
for (let i = 0; i < arr.length; i++) {
    temp=arr[i];
    len=temp.length;

    for (let z = 0,j=len-1; z <j; z++,j--) {
        if(temp[z]==temp[j]){
            flag=0;
            continue; 
        }
        else{
            flag=1;
            break;
        }
    }
    if(flag==0){
        var symbol:string[]=[];
        for (let sym = 0; sym < arr[i].length; sym++) {
            symbol.push("*");
        }
        arr[i]=symbol.join("");
    }
}
console.log(arr.join(" "));