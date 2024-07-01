// Write a javascript Program to Swap the values of two variables.

function swapVariables(a, b) {
    const temp = a;
  
    a = b;
  
    b = temp;
  
    return [a, b];
  }
  
  let x = 5;
  let y = 10;
  
  console.log("Before swapping:");
  console.log("x =", x); 
  console.log("y =", y);   
  [x, y] = swapVariables(x, y);
  
  console.log("After swapping:");
  console.log("x =", x); 
  console.log("y =", y); 
  