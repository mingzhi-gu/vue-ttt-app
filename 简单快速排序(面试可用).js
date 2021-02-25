let arr = [8,8,5,4,6,9,7,3,2,1];
function quickSort(arr){
    if(arr === null || arr.length == 0) return [];
    //选班长 leader
    let leader = arr[0];
    let left = [];
    let right = [];
    for(let i = 1 ; i < arr.length ; i++){
        //小于班长的 再左边
        if( arr[i] < leader ){
            left.push(arr[i])
        }
        //大于班长的 再右边
        else right.push(arr[i])
    }
   left = quickSort(left); //在左边的依旧是乱的，继续这样的方式排序，直到排序好
   right = quickSort(right);//在右边的依旧也是乱的，继续这样的方式排序，直到排序好
    left.push(leader);   //排序好的左边 push 班长
    return left.concat(right) //再拼接上右边的 得到一个完整的排序
};
console.log(quickSort(arr))