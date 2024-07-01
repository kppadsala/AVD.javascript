// write a javascript program to Given a number, n, return a function which adds n to the number passed to it.

function createAdder(n) {
    return function(x) {
      return x + n;
    };
  }
  
  const add1 = createAdder(5);
  console.log(add1(10));
  console.log(add1(20));
  
  const add2 = createAdder(10);
  console.log(add2(10));
  console.log(add2(20));
  