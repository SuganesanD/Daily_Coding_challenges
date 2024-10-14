// find the longest palindrome in the substring of the given string
var string: string = "aukunb"
var finalstring: string = ""
var flag = 0
var finalarray: string[] = []
var max:number=0
var maxstring:string=''
for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
        for (let k = i; k <= j; k++) {
            finalstring += string[k];
        }
        finalarray.push(finalstring);

        finalstring = ""
    }
}
for (let len = 0; len < finalarray.length; len++) {
    var i: number = 0
    let j = finalarray[len].length - 1
    flag = 0;
    while (i <= j) {
        if ((finalarray[len])[i] == (finalarray[len])[j]) {
            flag = 1
        }
        else {
            flag = 0
            break;
        }
        i++
        j--
    }
    if (flag == 1) {

        if(max<finalarray[len].length){
        max=finalarray[len].length
        maxstring=finalarray[len]
        }
    }  
}
console.log(`The logest palindeome sub string's length is ${max}, ${maxstring}`)


