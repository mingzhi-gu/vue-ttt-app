let arr = [9, 1, 4, 5, 8, 7, 9, 6, 2, 3, 101, 100, 100];

//比较
function compare(a, b) {
    if (a > b) {
        return true;
    }
    return false;
}
//交换
function exChange(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

//冒泡
function bubbling(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] === arr[j + 1]) {
                arr.splice(j + 1, 1);
            }
            if (compare(arr[j], arr[j + 1])) {
                exChange(arr, j, j + 1);
            }
        }
    }
}

//选择
function select(arr) {
    for (let i = 0; i < arr.length; i++) {
        let maxIndex = 0;
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[maxIndex] < arr[j]) {
                maxIndex = j;
            }
        }
        exChange(arr, maxIndex, arr.length - 1 - i)
    }
}

//简单快速排序
function easy(arr) {
    if (arr === null || arr.length == 0) return [];
    const temp = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > temp) {
            right.push(arr[i])
        } else if (arr[i] <= temp) {
            left.push(arr[i])
        }
    }
    left = easy(left);
    right = easy(right);
    left.push(temp);
    return left.concat(right);
}
console.log(easy(arr));

