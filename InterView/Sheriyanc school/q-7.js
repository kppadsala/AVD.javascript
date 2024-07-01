// write a function that accepts  a string  as a parameter  and convert  the first letter  of  each word of the string in uppercase .

function letterCapitial(str) {
    var allword=str.split(" ").map(function (word) {
        return word.charAt(0).toUpperCase() + word.substring(1)
    })
    console.log(allword.join(" "));
}
letterCapitial("my name is krunal");