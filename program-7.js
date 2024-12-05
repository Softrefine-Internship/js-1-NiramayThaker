// Write javascript program to remove duplicate objects from an array.

// Sample Input:
// array = [
//  { title: "C++", author: "Bjarne" },
//  { title: "Java", author: "James" },
//  { title: "Python", author: "Guido" },
//  { title: "Java", author: "James" },
// ];

// Expected Output:
// [
//  { title: 'C++', author: 'Bjarne' },
//  { title: 'Java', author: 'James' },
//  { title: 'Python', author: 'Guido' }
// ]


const checkSimilar = function(arr) {
    let op_arr = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if(op_arr.includes(JSON.stringify(arr[j]))) {
                console.log("--")
            }
            else {
                op_arr.push(arr[i]);
            }
        }
    }
    // return op_arr
}


array = [
    { title: "C++", author: "Bjarne" },
    { title: "Java", author: "James" },
    { title: "Python", author: "Guido" },
    { title: "Java", author: "James" },
];

// console.log(JSON.stringify(array[1]) === JSON.stringify(array[3])); 

console.log(checkSimilar(array));
