// Write a function that takes an array of numbers as argument. Return the number of negative values in the array in js


function countNegativeNumbers(arr) {
    return arr.filter(num => num < 0).length;
}

let numbers = [5, -3, -2, -7, 0, -1];
let negativeCount = countNegativeNumbers(numbers);
console.log("Number of negative values:", negativeCount); 
