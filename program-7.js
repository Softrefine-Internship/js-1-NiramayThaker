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

// array = [
//     { title: "C++", author: "Bjarne" },
//     { title: "Java", author: "James" },
//     { title: "Python", author: "Guido" },
//     { title: "Java", author: "James" },
// ];

// array = [{id:1,num:[1,2,3]},
//     {id:1,num:[1,2,3]},
//     {id:2,num:[1,2,3,4]}
// ];

const removeDuplicate = (array) => {
  const temp = new Set();
  return array.filter(item => {
    const key = JSON.stringify(item);  
    if (temp.has(key)) {
      return false; 
    } else {
      temp.add(key); 
      return true;  
    }
  });
};

const array = [
  { id: 1, num: [1, 2, 3] },
  { id: 1, num: [1, 2, 3] },
  { id: 2, num: [1, 2, 3, 4] }
];


// array = [
//   { title: "C++", author: "Bjarne" },
//   { title: "Java", author: "James" },
//   { title: "Python", author: "Guido" },
//   { title: "Java", author: "James" },
// ];

console.log(removeDuplicate(array));