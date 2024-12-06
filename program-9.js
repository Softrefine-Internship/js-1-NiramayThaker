// Write a JavaScript program to find the most frequent item in an array.

// Sample input : [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Expected Output : console.log(a, "5 times")

// let arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let arr = [1, 2, 2, 3, 4, 4];
let cnt = {};

for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    if (cnt[item]) {
        cnt[item] += 1;
    } else {
        cnt[item] = 1;
    }
}

let maxCount = 0;
let freqItems = [];

for (let itm in cnt) {
    if (cnt[itm] > maxCount) {
        maxCount = cnt[itm];
        freqItems = [itm]; 
    } else if (cnt[itm] === maxCount) {
        freqItems.push(itm);
    }
}

console.log(`Frequent items: ${freqItems.join(', ')} (${maxCount} times)`);
