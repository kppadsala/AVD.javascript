// write a javascript program to multiply numbers.


function multiply(number) {

    return number.reduce((acc, num) => acc * num, 1);
  
  }
  const inputNumber = [2,3,4,5]
  console.log(multiply(inputNumber)); 