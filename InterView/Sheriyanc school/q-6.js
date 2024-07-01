// write function that return pass string with letter alphabetical order

function alphabetstr(str) {
    return str.split("").sort().join("")
}
console.log(alphabetstr("krunal"));
console.log(alphabetstr("apple"));
// output=aelpp
// output= aklnru