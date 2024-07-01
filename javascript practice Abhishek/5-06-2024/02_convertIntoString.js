// write a javascript program to Convert All Array Items to String.

function convertIntoString(arr){
    return arr.map((item)=>String(item))

}
const inputArray = [1,5,"abhi",11,"raj" ];
const stringArray = convertIntoString(inputArray);
console.log(stringArray);

  