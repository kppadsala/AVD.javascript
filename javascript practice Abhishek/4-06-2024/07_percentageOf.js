//Write a function that takes two numbers (a and b) as argument. Return b percent of a in js



function percentOf(a, b) {
    return (b / 100) * a;
}


let a = 200;
let b = 25;
let result = percentOf(a, b);
console.log(b + "% of " + a + " is:", result);
