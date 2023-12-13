function f1(callback,callback2) {
    setTimeout(() => {
        console.log("krunal");
        callback(callback2);
    }, 2000);
}
function f2(cb2) {
    console.log("padsala");
    cb2();
}
function f3() {
    console.log("This is my Name==>");
    
}

f1(f2,f3);
// f2();