// // Write a program in javascript to count the total number of alphabets, digits and special characters in a string.


// function countCharacters(str) {
//     let alphabets = 0;
//     let digits = 0;
//     let specialChars = 0;

//     for (const char of str) {
//         if (/[a-zA-Z]/.test(char)) {
//             alphabets++;
//         } else if (/[0-9]/.test(char)) {
//             digits++;
//         } else {
//             specialChars++;
//         }
//     }

//     return { alphabets, digits, specialChars };
// }


// const inputString = "Hello i am abhishek 100";
// const counts = countCharacters(inputString);
// console.log("Alphabets:", counts.alphabets);
// console.log("Digits:", counts.digits);
// console.log("Special Characters:", counts.specialChars);


let fruits = ["mango", "apple", "guava", "orange", "papaya","grapes"]
let removeFruit = fruits.splice(1,2);

console.log(removeFruit);