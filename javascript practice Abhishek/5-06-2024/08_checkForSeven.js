//write a javascript program to Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array" 


function checkForSeven(arr) {
    const stringArray = arr.map(num => num.toString());
  
    const joinedString = stringArray.join('');
  
    if (joinedString.includes('7')) {
      return "Boom!";
    } else {
      return "There is no 7 in the array";
    }
  }
  
  const inputArray1 = [1, 2, 7, 4, 5];
  console.log(checkForSeven(inputArray1)); 
 