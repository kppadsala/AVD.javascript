// Create a function which returns the number of true values there are in an array.
function countTrue(arr) {
  return arr.filter((e) => e === true);
}
const array = [true, false, true,false, true, false];
let datalength = countTrue(array);
console.log("datalength:", datalength.length);
// output=datalength: 3  