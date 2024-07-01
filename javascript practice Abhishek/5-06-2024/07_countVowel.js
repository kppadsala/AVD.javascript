// write a javascript program to Create a function that takes a string and returns the number (count) of vowels contained within it

function countVowels(str) {

    let vowelCount = 0;
    
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) {
        vowelCount++;
      }
    }
    
    return vowelCount;
  }
  
  const inputString = "Hello, world!";
  const result = countVowels(inputString);
  console.log(result); 
  