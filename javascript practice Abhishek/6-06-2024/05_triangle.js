// Write a javascript    function that takes the base and height of a triangle and return its area

function triangleArea(base, height) {
    const area = (base * height) / 2;
    
    return area;
  }
  
  const base = 5;
  const height = 8;
  const area = triangleArea(base, height);
  console.log("The area of the triangle is:", area);
  