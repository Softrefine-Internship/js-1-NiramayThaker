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

array = [
    { title: "C++", author: "Bjarne" },
    { title: "Java", author: "James" },
    { title: "Python", author: "Guido" },
    { title: "Java", author: "James" },
];

const removeDuplicate = (array) => {
    for (let ele = 0; ele < array.length; ele++) {
      let curr = array.splice(ele, 1);
      let flag = false;
      for (let j = 0; j < array.length; j++) {
        const ele = array[j];
  
        if (ele.author == curr[0].author && ele.title == curr[0].title) {
          flag = true;
        }
      }

      if (!flag) 
        array.splice(ele, 0, ...curr);
    }
    return array;
}

console.log(removeDuplicate(array));
