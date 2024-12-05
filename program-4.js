// Write a JavaScript function which takes two arrays as an argument and returns merged array in ascending order.

// Sample Input:
// arr1 = [3, 5, 1]
// arr2 = [4, 2]

// Expected output: [1, 2, 3, 4, 5]

const sort_asc = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }            
        }
    }
    return arr
}

merge_arr = (arr1, arr2) => {
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }
    return arr1
}

arr1 = [3, 5, 1];
arr2 = [4, 2];

merge = merge_arr(arr1, arr2);
ans = sort_asc(merge)

console.log(ans);
