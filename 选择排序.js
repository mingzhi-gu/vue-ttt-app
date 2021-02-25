// 把内层的循环中，剩下的数组中，取最大值，再放到剩下的最后面
let arr = [8,8,5,4,6,9,7,3,2,1];
function compare(a , b){
    if(a < b){
        return true;
    }
    else{
        return false
    }
}
function exChange(arr , a , b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
function sort(arr){
    for(let i = 0 ; i < arr.length ; i++){
        var maxIndex = 0;
        for(let j = 0 ; j < arr.length-i ; j++){
           
            if(compare(arr[maxIndex] , arr[j])){
                maxIndex = j;   
            }
        }
        exChange(arr,maxIndex , arr.length-1-i)
    }
}
sort(arr)
console.log(arr)
console.log(arr.length)