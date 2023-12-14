let userObj = {
    name: "kiranbhai",
    age: "22",
    vehicales: ["Activa", "Creta", "Iqube"],
    fun: function addAge(age) {
        // console.log("addAge  addAge:", addAge)
        return age;
        
    }
}

// 1. print all value of your details object
console.log("userObj:", userObj);

// 2. add a function name printAge inside object who print age (from outside)

// 3. get all key
let objKeys = Object.keys(userObj);
console.log("  objKeys:", objKeys)

// 4. get all value
let objValue = Object.values(userObj);
console.log("objValue:", objValue);

// 5. add one key for city name and store your city name on it
userObj.city = "Surat";
console.log("upDate userObj:", userObj)

// 6.delete age key from object
delete userObj.age;
console.log("userObj:", userObj)

// 7. make one function name addAge who print age with add some year which one pass by user

