//write a javascript program to find odd numbers and  sum of them.

function sumOfOdd(arr){
let sum = 0;
for(let i=0; i<arr.length; i++){
    if(arr[i]%2 !==0)
        sum += arr[i]
}
return sum;
}

const num = [1,6,5,3,4,12,10,15]; //1,5,3,15
console.log(sumOfOdd(num));





























// function sumOfOdd(arr){
// let sum = 0;
// for(let i=0; i<arr.length;i++){
//     if(arr[i]%2!==0)
//         sum+=arr[i];
// }
// return sum;
// }

// let result = [5,2,3,6,7,10,15,12];  //3,5,7,15
// console.log("numbers:",result);
// console.log(sumOfOdd(result));

