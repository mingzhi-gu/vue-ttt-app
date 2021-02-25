let arr = [4,1,6,9,3,2,8,7];

function exChange(arr , a , b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
function standardSort(arr){
    standard(arr,0,arr.length)
}
function standard(arr, begin , end) {
    if(begin >= end-1) return 
    let left = begin;
    let right = end;
    do {
        do {
            left ++
        } while (left < right && arr[left] < arr[begin]);
        do {
            right --
        } while (left < right && arr[right] > arr[begin]);
        if( left < right) {
            exChange(arr, left , right);
        }
    } while (left < right);
    let middle = left == right ? right - 1 : right;
    exChange(arr, begin, middle );
    standard(arr, begin, middle);
    standard(arr, middle + 1 , end );
}
standardSort(arr);
console.log(arr);