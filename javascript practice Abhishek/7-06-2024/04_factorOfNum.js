// Create a function that finds each factor of a given number n. Your solution should return an array of the number(s) that meet this criteria.


function findFactors(n) {
    const factors = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

const number = 18;
const result = findFactors(number);
console.log(`The factors of ${number} are: ${result}`);
