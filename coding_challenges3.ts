var arr: number[] = [1,2,3,2,3,4,1,5,6,7]
var count_arr: number[] = []
var final_count_arr:number[][]=[]
var count: number = 1
var n: number = 0;
var i: number = n
var j: number = i + 1
var temp_start: number = 0
var max:number[]=[]
var max_val:number=0
count_arr.push(arr[0])

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            count_arr.push(arr[i + 1])
        }
        else  {
            
                final_count_arr.push(count_arr)
                count_arr = []
                count_arr.push(arr[i + 1])

            }
        }  
    for(let j=0;j<final_count_arr.length;j++){
        if(final_count_arr[j].length>max.length){
            max=final_count_arr[j]
            max_val=max.length
        } 
    }
    console.log(`count ${max.length}`);
    for(let j=0;j<final_count_arr.length;j++){
        if(final_count_arr[j].length==max_val){
            console.log(final_count_arr[j].join(' '));
            
        }
    }









