// write a function that reverse a number 

// function reverseNumber(num) {
//     return Number( num.toString().split("").reverse().join(""));
// }
// console.log(reverseNumber(12));
// 21
// console.log(reverseNumber(123456));  
// 654321

// =============================OTHER WAY===================
function reverseNumber(Number) {
    var reverse=0
    while (Number>0) {
        var rem=Number%10;
        reverse=reverse*10+rem;
        Number=Math.floor(Number/10);
    }
        
    console.log("🚀 ~ file: q-4.js:16 ~ reverseNumber ~ reverse:", reverse)
}
reverseNumber(123456789);
