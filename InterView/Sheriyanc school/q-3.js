// make duplicates([1,2,3,4,5]) output=[1,2,3,4,5,1,2,3,4,5];
function duplicates(arr) {
    return arr.concat(arr)
}
console.log(" duplicates:", duplicates([1,2,3,4,5]));
