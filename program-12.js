// Write a JavaScript function to find the difference between two arrays.

// Sample Input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10]

// Expected Output: c = [3, 10, 100]


const getCnt = (arr) => {    
    let cnt = {};

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
    
        if (cnt[item])
            cnt[item] += 1;
        
        else 
            cnt[item] = 1; 
    }
    
    return cnt;    
}

let arr1 = [1, 2, 3];
let arr2 = [100, 2, 1, 10];
let ans = [];
let arr =  arr1.concat(arr2)

let allCnt = getCnt(arr);

for (let itm in allCnt) {
    if(allCnt[itm] == 1) {
        ans.push(Number(itm));
    }
}

console.log(ans);
