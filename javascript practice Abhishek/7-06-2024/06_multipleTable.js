// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length


function multipleTable(num, length) {
    const multiples = [];
    for (let i = 1; multiples.length < length; i++) {
        multiples.push(num * i);
    }
    return multiples;
}

const num = 3;
const length = 10;
const result =multipleTable(num, length);
console.log(`Multiples of ${num} until length ${length}:`, result);
