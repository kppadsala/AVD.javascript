// create array which have 1 to 9 no
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 1.print 9th and 10th index of array
console.log("--arr-->", arr[8]);  //--arr--> 9
console.log("--arr-->", arr[9]);  //--arr--> undefined

// 2.print every element of array by map and for loop
// ---For Loop----
for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
}  //1 to 9 

// ---Map Method---
let Newarr=arr.map((e) => {
    return e;
})
console.log("--->Newarr-->", Newarr);  //--->Newarr--> [1, 2, 3, 4, 5,6, 7, 8, 9]

//3. change a value of 6th index with 100
arr[6] = 100;
console.log("==>", arr);  //==> [1, 2, 3, 4, 5,6, 100, 8, 9]


//4. print a array till element value not grater then 100

// 5. add 1 in every element of an array
let Addarr = arr.map((e) => {
  return e+1;
});
console.log("--->Addarr-->", Addarr);  //--->Addarr--> [2,   3, 4,  5, 6, 7, 101, 9, 10]

//6. add 0 in start of array
let add1 = arr.unshift(0);
console.log("==>", add1);  // length -10
console.log("==>", arr);  //==> [0, 1,   2, 3, 4,5, 6, 100, 8, 9]

// 7. add  99 in end of array
let add2 = arr.push(99);
console.log("==>", add2); //length -11
console.log("==>", arr);  //==> [0, 1,   2, 3, 4, 5, 6, 100, 8, 9,99]

// 8. remove 1 element from start of  array
let del1 = arr.shift(0);
console.log("==>", del1);  //0
console.log("==>", arr);  //==> [ 1,   2, 3, 4,  5, 6, 100, 8, 9, 99]

//9. remove 1 element from end of array
let del2 = arr.pop();
console.log("==>", del2); //99
console.log("==>", arr);  //==> [1, 2, 3, 4, 5,6, 100, 8, 9]

//10.do sum of all value of an array with use of map, reduce and for-loop
//=========reduce========
let total = arr.reduce((lastval, e, i) => {
    console.log("e==>", e, "i==>", i);
    console.log("lastval==>", lastval);
    return lastval + e;
})
console.log("total==>", total); //total==> 138

//=========map and reduce========
const sum = arr.map(arr => arr).reduce((a, b) => a + b);
console.log("Using map and reduce sum==>", sum);   //==>138

//=========for loop========
let final = 0;
for (let i = 0; i < arr.length; i++){
    final = final + arr[i];    
}
console.log("final==>", final);  //final==> 138


//11. sort a array in acending decending
arr.sort((a, b) => a - b);
console.log("arr==>", arr);  //arr==>[1, 2, 3,   4, 5,6, 8, 9, 100]


// 12. reverce an array with use of method
arr.reverse();
("file: Array Task.js:81 ===> arr---->", arr)
console.log("arr==>", arr);  //arr==> [100, 9, 8, 6, 5,4, 3, 2, 1]

// 13. reverce an array with use of for-loop
console.log("length==>",arr.length);
for (let i = 9; i>arr.length; i--){
}
console.log("reverce", arr);  //arr==> [100, 9, 8, 6, 5,4, 3, 2, 1]





