// Write a javascript program to Print Half half-pyramid pattern 

function halfPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
      let pattern = '';
      
      for (let j = 1; j <= i; j++) {
        pattern += i + ' ';
      }
      
      console.log(pattern);
    }
  }
  
  const numRows = 5;
 halfPyramid(numRows);
  