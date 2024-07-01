// Write a javascript program that accepts three integers and finds the maximum of three.
function findMaxOfThree(num1, num2, num3) {
    let max = num1;

    if (num2 > max) {
        max = num2;
    }
    
    if (num3 > max) {
        max = num3;
    }

    return max;
}


let num1 = 52;
let num2 = 100;
let num3 = 62;

let max = findMaxOfThree(num1, num2, num3);

console.log(`The maximum of ${num1}, ${num2}, and ${num3} is ${max}.`);
