// write function that check whether a passed string  is palidrome or not

function checkpalidrome(str) {
    var reversed=str.split("").reverse().join("")
    // console.log("🚀 ~ file: q-5.js:3 ~ checkpalidrome ~ reversed:", reversed)
    if(reversed === str){
        console.log(` ${str} is palidrome`);
    }
    else{
        console.log(` ${str} is not palidrome`);

    }
}
checkpalidrome("poop");
checkpalidrome("krunal");
