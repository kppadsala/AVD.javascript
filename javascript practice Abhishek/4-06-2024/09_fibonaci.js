
function fibonacciSeries(n){

    let fib = [0,1];

    for(let i=2; i<n; i++)
    {
        fib[i]=fib[i-2]+fib[i-1];

    }
    return fib

}
const num = 10;
console.log(fibonacciSeries(num));





























// function fibonacciSeries(n) {
    

//     let fib = [0, 1];

//     for (let i = 2; i < n; i++) {
//         fib[i] = fib[i - 2] + fib[i - 1];
//     }

//     return fib;
// }

// const numTerms = 10;
// console.log(fibonacciSeries(numTerms));

