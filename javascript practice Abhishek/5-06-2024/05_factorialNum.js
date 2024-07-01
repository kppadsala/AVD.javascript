//write a javascript program to Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.

// function factorialNum(n) {
//     if (n < 0) {
//       return "Invalid input: factorial is not defined for negative numbers.";
//     }
    
//     if (n === 0 || n === 1) {
//       return 1;
//     }
    
//     return n * factorialNum(n - 1);
//   }
  
//   const inputNumber =  5;
//   const resultRecursive = factorialNum(inputNumber);
//   console.log(resultRecursive);
  



// ----------------------------------------------------------------------------------//


// function fibonacciSeries(n){


//   let fib = [0,1];
//   for(let i = 2; i<n; i++){
//     fib[i]= fib[i-2]+fib[i-1];
//   }
//   return fib;


// }
// const num = 10;
// console.log(fibonacciSeries(num));


// function sumOfOdd(arr){

//   let sum = 0;
//   for(let i=0; i<arr.length; i++){
//     if(arr[i]%2 == 0){
//       sum+=arr[i];
//     }
//     }
//   return sum;

// }
// const num = [1,5,7,9,10,2,4,6];
// console.log(sumOfOdd(num));



// function evenOrOdd(n){
//   if(n%2===0){
//     return "even";
//   }
//   else{
//     return "odd";
//   }

// }
// const num = 4;
// console.log(evenOrOdd(num));


// function numberTriangle(rows) {
//     for (let i = 1; i <= rows; i++) {
//         let str = '';
//         for (let j = 1; j <= i; j++) {
//             str += j + ' ';
//         }
//         console.log(str.trim());
//     }
// }


// // Example usage:
// numberTriangle(5);



// function pattern(rows){

//   for(let i =1; i<=rows; i++){
//     let str = '';
//     for(j=1; j<=i; j++){
//       str +=j+ ' ';
//     }
//     console.log(str.trim());
//   }

// }
// pattern(5)


// https://www.programiz.com/javascript/examples