// write a javascript function that takes an array of positive and negative numbers. Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.


function countPosNeg(arr){


    arr.forEach(num=>{
        if(num>0){
            positiveCount++;
        }else if(num<0){
            negativeSum += num;
        }
    });
    return [positiveCount,negativeSum]
}
let positiveCount = 0;
let negativeSum = 0;
const inputArray = [1, -2, 3, -4, 5, -6, 1, 7];
const result = countPosNeg(inputArray);
console.log(inputArray);
console.log("positive Number",positiveCount)
console.log("negative sum",negativeSum);