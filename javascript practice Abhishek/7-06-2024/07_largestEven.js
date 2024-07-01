// Write a function that finds the largest number in an array nums that is also even. If there is no even number, return -1.


function findLargestEven(nums) {
    let largestEven = -1; 
    for (const num of nums) {
        if (num % 2 === 0 && num > largestEven) {
            largestEven = num;
        }
    }
    return largestEven;
}

const nums = [3, 6, 11, 8, 5, 10];
const result = findLargestEven(nums);
console.log("Largest even number:", result);
