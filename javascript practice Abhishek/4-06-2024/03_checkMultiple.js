//  Write a javascript program that reads two integers and checks whether they are multiplied or not.

function checkMultiplication(num1, num2) {
    if (num1 % num2 === 0) {
        return `${num1} is a multiple of ${num2}.`;
    } 
    else if (num2 % num1 === 0) {
        return `${num2} is a multiple of ${num1}.`;
    }
     else{
        return `${num1} and ${num2} are not multiples of each other.`;
    }
}   


let num1 = 10;
let num2 = 100; 

let result = checkMultiplication(num1, num2);

console.log(result);
