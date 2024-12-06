// Write a JavaScript function to find the difference between two arrays.

// Sample Input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10]

// Expected Output: c = [3, 10, 100]

const getDifference = (arr1, arr2) => {
    let diff1 = arr1.filter(item => !arr2.includes(item));
    let diff2 = arr2.filter(item => !arr1.includes(item));

    return [...diff1, ...diff2];
};

let arr1 = [1, 2, 3];
let arr2 = [100, 2, 1, 10];

let result = getDifference(arr1, arr2);
console.log(result); 
