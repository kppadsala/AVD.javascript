// Fibonacci Series
let a=0;
let b=1;
console.log(a)
console.log(b)
let num=10
for(let i=0;i<=num;i++){
    var temp=a+b;
    console.log(temp)
    a=b;
    b=temp;
}