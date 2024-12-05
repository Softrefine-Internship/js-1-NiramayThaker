// Merge two arrays and remove duplicate items from the merged array in JavaScript.

// Sample input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [3, 4, 5, 7];

// Expected output: [1, 2, 3, 4, 5, 6, 7]

arr1 = [1, 2, 3, 4, 5, 6];
arr2 = [3, 4, 5, 7];


for (let i = 0; i < arr2.length; i++) {
    if(!arr1.includes(arr2[i])) {
        arr1.push(arr2[i]);
    }
}

console.log(arr1);
