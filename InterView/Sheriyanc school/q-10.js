// In an array of number and strings only add  those  member  which are not strings
let a=["parth",450,"krunal","nirmal",780,"harsh",900]
let arrNumber=[];
let arrStrings=[];

let sum=0
a.forEach((ele)=>{
    if(typeof ele === "number"){
        arrNumber.push(ele)
    }
    else{
        arrStrings.push(ele)

    }
});
console.log("All element in array =>",arrNumber);
console.log("All element in array =>",arrStrings);


arrNumber.forEach((ele)=>{
    sum=sum + ele
})
console.log("Sum of all element =>",sum);