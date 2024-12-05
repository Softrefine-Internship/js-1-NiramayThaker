// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.

// Sample input: 025468
// Expected output: 0-254-6-8.

let inp = "025468";
let ans = inp[0];  

for (let i = 0; i < inp.length - 1; i++) {

    if (Number(inp[i]) % 2 === 0 && Number(inp[i + 1]) % 2 === 0) {
        ans += `-${inp[i + 1]}`; 
    } else {
        ans += inp[i + 1];  
    }
}

console.log(ans);
