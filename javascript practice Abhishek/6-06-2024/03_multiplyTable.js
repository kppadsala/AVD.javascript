// Write a javascript program to display the multiplication table for a given integer


function multiplicationTable(number) {

    for (let i = 1; i <= 10; i++) {
      const result = number * i;
      
      console.log(`${number} * ${i} = ${result}`);
    }
  }
  
  const inputNumber = 5;
 multiplicationTable(inputNumber);
  