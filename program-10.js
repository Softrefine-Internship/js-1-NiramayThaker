// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

// Sample input:
// arr1 = [1, 0, 2, 3, 4];
// arr2 = [3, 5, 6, 7, 8, 13];

// Expected Output: [4, 5, 8, 10, 12, 13]

arr1 = [1, 0, 2, 3, 4];
arr2 = [3, 5, 6, 7, 8, 13];
let length = arr1.length > arr2.length ? arr1.length : arr2.length;

op = [];

for (let i = 0; i < length; i++) {
    if(arr1[i] === undefined)
        arr1[i] = 0;
    
    else if (arr2[i] === undefined) 
        arr2[i] = 0;
    
    op.push(arr1[i] + arr2[i]);
}

console.log(op);
