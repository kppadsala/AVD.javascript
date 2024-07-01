// Create a function that takes an array and a string as arguments and returns the index of the string


function findStringIndex(arr, str) {

    return arr.indexOf(str);
  }
  
  const array = ["apple", "banana", "cherry", "date"];
  const searchString1 = "banana";
  const searchString2 = "grape";
  
  console.log(findStringIndex(array, searchString1));
  console.log(findStringIndex(array, searchString2));
  