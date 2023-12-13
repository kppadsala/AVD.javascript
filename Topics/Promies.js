let pro = new Promise((resolve, reject) => {
    let x = 10;
    if (x % 2 == 0) {
       resolve("no is even==>") 
    }
    else {
        reject("no is odd==>")
    }
})
pro.then((res) => {
    console.log("res==>",res);
}).catch((err) => {
    console.log("err==>",err);
})