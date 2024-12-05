// Write javascript function which takes nested array as an argument and returns flatten array as output.

// Sample Input: [1, 2, [3, 4], [5, [6, 7]]];
// Expected Output: [1, 2, 3, 4, 5, 6, 7];


const flatten_arr = function(arr) {
    return arr.flat(Infinity)
}

arr = [1, 2, [3, 4], [5, [6, 7]]];
let ans = flatten_arr(arr)
console.log(ans)
