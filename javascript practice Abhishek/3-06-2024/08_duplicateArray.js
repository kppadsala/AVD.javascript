//  Write a JavaScript program to find duplicate values in a JavaScript array.

function findDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) !== index);
}

let array = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9];
let duplicates = findDuplicates(array);
console.log("old array:", array);
console.log("Duplicate values:", duplicates);
