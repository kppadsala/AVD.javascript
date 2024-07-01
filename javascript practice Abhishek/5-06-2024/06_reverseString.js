// write a javascript program to Create a function that takes a string as its argument and returns the string in reversed order.

function reverseString(str) {

    const characters = str.split('');
  
    const reversedCharacters = characters.reverse();
  
    const reversedString = reversedCharacters.join('');
  
    return reversedString;
  }
  
  const inputString = "Hello, world!";
  const reversedString = reverseString(inputString);
  console.log(reversedString); 
  