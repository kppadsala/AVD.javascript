let user = {
    name: "krunal",
    age: 22,
    
}
let { name, age } = user 
console.log("user====>",user);
console.log("name", name);

function detail() {
    return { name1: "krunal", age2: 22, }
}

let obj = detail();
console.log("===>", obj.name1);
console.log("===>", obj.age2);

let { name1, age2 } = detail();
console.log("===>",name1);
