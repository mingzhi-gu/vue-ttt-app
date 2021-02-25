let arr = [8,8,5,4,6,9,7,3,2,1];
function compare(a , b){
    if(a > b){
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
        for(let j = 0 ; j < arr.length-1-i ; j++){
            if(arr[j] == arr[j+1]){
                arr.splice(j+1,1)
            }
            if(compare(arr[j] , arr[j+1])){
                exChange(arr,j , j+1)
            }
           
        }
    }
}
sort(arr)
console.log(arr)
console.log(arr.length)