// Write a JavaScript program to compute the union of two arrays.

// Sample input:
// arr1 = [1, 2, 3]]
// arr2 = [100, 2, 1, 10];

// Expected Output: c = [1, 2, 3, 10, 100]


const sortAsc = (arr) => {
    return arr.sort((a, b) => {
        if (typeof a === 'number' && typeof b === 'number') {
            return a - b; 
        }
        if (typeof a === 'object' && typeof b === 'object') {
            return JSON.stringify(a).localeCompare(JSON.stringify(b));
        }
        return 0; 
    });
};

const unionArr = (arr1, arr2) => {
    let unionSet = new Set([...arr1, ...arr2]);    
    return sortAsc([...unionSet]);
};

let arr1 = [1, 2, 3];
let arr2 = [100, 2, 1, 10];

console.log(unionArr(arr1, arr2));
