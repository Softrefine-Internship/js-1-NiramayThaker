// Write javascript function which takes nested array as an argument and returns flatten array as output.

// Sample Input: [1, 2, [3, 4], [5, [6, 7]]];
// Expected Output: [1, 2, 3, 4, 5, 6, 7];

// const flatten_arr = function(arr) 
// {
//     return arr.flat(Infinity)
// }

function flattenArray(arr) {
    let result = [];

    arr.forEach(item => {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item));
        } else {
            result.push(item);
        }
    });
    
    return result;
}

const input = [1, 2, [3, 4], [5, [6, 7]]];
console.log(flattenArray(input))
