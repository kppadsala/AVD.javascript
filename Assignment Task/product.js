// const arr = require("./jsonData");
const arrData = require("./productData");
// 1) top 5 cheapest product
// let price = [];
// arrData.map((e) => {
//   price.push(e.price);
// });
// console.log(price);
// console.log(Math.min(...price));

// 2) top 5 expensive product
// let price = [];
// arrData.map((e) => {
//     price.push(e.price);
// });
// console.log(" price:", price)
// console.log(Math.max(...price));

// 3) top 10 products discount price --> if discount are same then consider higher price to set in order

// let discount = [];
// arrData.map((e) => {
//     discount.push(e.discountPercentage)
// })
// console.log("discount:", discount)

// console.log(Math.max(...discount));
// let disProduct=arrData.sort((a,b)=> b.discountPercentage  -   a.discountPercentage )
// disProduct.forEach((e) => {
    
//     console.log(`${e.price}==>${e.discountPercentage}`);
// });

// 4) give all data of user given brand name 

// function getbranAllinfo (brandName) {
//   let filterBrandData = arrData.filter((brandData) => {
//     return brandData.brand == brandName;
//   });
//   let brandsAllData = filterBrandData.map((brandsinfo) => {
//     return brandsinfo;
//   })
//   return brandsAllData;
// }
// let userbrandInput = "nike";
// let userInput = getbranAllinfo(userbrandInput);
// console.log("userInput:", userInput)
// console.log("userInput:", userInput.length)

// 5) filter all data by user given gender wise

function getDataGender(genderName){
    let genderdata = arrData.filter((genderinfo) => {
        return genderinfo.gender==genderName
    })
    let genderAllData = genderdata.map((genderAllinfo) => {
        return genderAllinfo.brand;
    })    
    return genderAllData;
}

let userInput = "male";
let userGenderInput = getDataGender(userInput);
// userGenderInput.forEach((e) => {
//     console.log(`${e}`);
// })
console.log("userGenderInput:", userGenderInput)
console.log("userGenderInput:", userGenderInput.length);
