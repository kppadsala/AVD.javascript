// how would you check if number is an integer?
// method=1
    // Number.isInteger(12)
    // output=>true
    // Number.isInteger(12.7)
    // output=>false
// method=2

let a=30
if(a%1 === 0){
    console.log("Integer");
}
else{
    console.log("Not Integer");
}