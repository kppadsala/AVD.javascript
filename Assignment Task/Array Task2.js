let arr = [1, 2, 3, 6, 7, 9, 3, 56, 8]
let Newarr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    Newarr.push(arr[i]);
  }
}
console.log("Newarr", Newarr); 
