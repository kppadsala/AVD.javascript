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

// function getDataGender(genderName){
//     let genderdata = arrData.filter((genderinfo) => {
//         return genderinfo.gender==genderName
//     })
//     let genderAllData = genderdata.map((genderAllinfo) => {
//         return genderAllinfo;
//     })
//     return genderAllData;
// }

// let userInput = "male";
// let userGenderInput = getDataGender(userInput);
// console.log("userGenderInput:", userGenderInput)
// console.log("userGenderInput:", userGenderInput.length);

// 6) filter data category wise --> if user give smartphone then return all data which contain smartphone in category in array

// let categoryToFilter = "smartphones";
// let filteredArray = arrData.filter((item)=> {
//   return item.category.includes(categoryToFilter);
// });
// console.log(filteredArray);
// console.log("Length Of FiltterdArray=", filteredArray.length);

// 7) filter data color wise --> if user give smartphone then return all data which contain smartphone in color in array --> user can give multiple color


// let userInput = ["red", "black"]
//   let ColorFilter = arrData.filter((colorinfo) => {
//     return colorinfo.color.includes(userInput)
//   })
//   console.log("ColorFilter==>", ColorFilter);

// 8) filter data size wise --> if user give 42 then return all data which does not contain 42 in array
 

//  const userSize = "42";

//  const filteredProducts = arrData.filter(
//    (product) => product.size.includes(userSize)
//  );

//  console.log(filteredProducts       );

//  9) return available or unavailable products
// let stockData = arrData.filter((stockItem) => {
//     return stockItem.isAvailable
// })
// console.log("stockData==>", stockData);
// console.log("Stock Data==>", stockData.length);

// let stockEmptyData = arrData.filter((stockEmpty) => {
//     return !stockEmpty.isAvailable;
// })
// console.log("stockEmptyData==>", stockEmptyData)
// console.log("Empty Stock Data==>", stockEmptyData.length);

// 10) top 5 products of particular brand which brand given by user accordingly their rating

