// Write a JavaScript program to compute the union of two arrays.

// Sample input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10];

// Expected Output: c = [1, 2, 3, 10, 100]

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

const union_arr = (arr1, arr2) => {
    for (let i = 0; i < arr2.length; i++) {
        if(arr1.includes(arr2[i]) === false)
            arr1.push(arr2[i]);
    }

    return arr1;
}

arr1 = [1, 2, 3];
sorted_arr1 = sort_asc(arr1);

arr2 = [100, 2, 1, 10];
sorted_arr2 = sort_asc(arr2);

console.log(union_arr(arr1, arr2));
