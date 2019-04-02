function bubbleSort1(arr) {
    var i, j, temp;
    for (i = 0; i < arr.length - 1; i++) {
        for (j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
function bubbleSort2(arr) {
    var _a;
    var i, j;
    for (i = 0; i < arr.length - 1; i++) {
        for (j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
            }
        }
    }
    return arr;
}
function bubbleSort3(arr) {
    var _a;
    for (var i = arr.length - 1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
            }
        }
    }
    return arr;
}
var num = [22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70];
// const sortedArr = bubbleSort1(num);
// const sortedArr = bubbleSort2(num);
var sortedArr = bubbleSort3(num);
console.log('sortedArr: ', sortedArr);
