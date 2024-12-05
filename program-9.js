// Write a JavaScript program to find the most frequent item in an array.

// Sample input : [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Expected Output : console.log(a, "5 times")

let arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let cnt = {};

for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    if (cnt[item])
        cnt[item] += 1;
    
    else 
        cnt[item] = 1; 
}

let maxCount = 0;
let freqItm;

for (let itm in cnt) {
    if (cnt[itm] > maxCount) {
        maxCount = cnt[itm];
        freqItm = itm;
    }
}

console.log(freqItm,`(${maxCount} times)`);
