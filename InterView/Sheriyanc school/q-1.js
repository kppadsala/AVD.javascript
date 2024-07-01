var str= "Hello Krunal"
let reversstr=str.split(" ")
.map((e)=>{
    return e.split("").reverse().join("")
});
console.log("🚀 ~ file: q-1.js:3 ~ reversstr:", reversstr.join(" "))
