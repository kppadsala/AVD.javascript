// Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.  
function checkFor50(num1, num2) {
    return num1 === 50 || num2 === 50 || num1 + num2 === 50;
}

// Test cases
console.log(checkFor50(50, 50)); 

