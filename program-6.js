// Merge two arrays and remove duplicate items from the merged array in JavaScript.

// Sample input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [3, 4, 5, 7];

// Expected output: [1, 2, 3, 4, 5, 6, 7]

// let arr1 = [1, 2, 3, 4, 5, 6];
// let arr2 = [3, 4, 5, 7];
const arr1 = [1, {id: 1}, 3, 4, 5, 6];
const arr2 = [3, 4, {id: 1}, 5, 7];

function objCheck(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

for (let i = 0; i < arr2.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < arr1.length; j++) {
        if (arr1[j] === arr2[i] || (typeof arr2[i] === 'object' && objCheck(arr1[j], arr2[i]))) {
            isDuplicate = true;
            break;
        }
    }

    if (!isDuplicate) {
        arr1.push(arr2[i]);
    }
}

console.log(arr1);
