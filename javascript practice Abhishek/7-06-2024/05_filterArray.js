// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

function filterArray(arr) {
    return arr.filter(item => typeof item === 'number' && item >= 0);
}

const mixedArray = [1, 'mohit', 3, 'abhishek', 5, 'rahul', 7];
const result = filterArray(mixedArray);
console.log("Filtered array:", result);
