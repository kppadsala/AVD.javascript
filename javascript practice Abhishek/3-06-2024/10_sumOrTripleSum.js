// Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

function sumOrTripleSum(num1, num2) {
    let sum = num1 + num2;
    return num1 === num2 ? sum * 3 : sum;
}

console.log(sumOrTripleSum(4, -4)); 

