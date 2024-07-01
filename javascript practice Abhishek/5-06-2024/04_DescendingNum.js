// wtirte a javascript to Create a function that takes any non-negative number as an argument and return it with its digits in descending order. Descending order is when you sort from highest to lowest.

function DescendingNum(num) {

    const numStr = num.toString();
    
    const digitsArray = numStr.split('');
    
    const sortedArray = digitsArray.sort((a, b) => b - a);
    
    const sortedStr = sortedArray.join('');
    
   
    const sortedNum = Number(sortedStr);
    
    return sortedNum;
  }
  
  
  const inputNumber = 42145;
  const result = DescendingNum(inputNumber);
  console.log(result); 
  