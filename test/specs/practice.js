let arr = [1, 2, 3,,2,2,2, 4, 5, 2, 3];
let duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);

console.log([...new Set(duplicates)]); // Output: [2, 3]
//console.log(duplicates);
