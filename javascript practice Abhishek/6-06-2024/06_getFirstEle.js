// write a javascript function that takes an array containing only numbers and return the first element

function getFirstElement(arr) {
    if (arr.length > 0) {

        return arr[0];
    } else {

        return null;
    }
  }
  

  const numbersArray = [5, 10, 15, 20];
  console.log(getFirstElement(numbersArray)); 
  