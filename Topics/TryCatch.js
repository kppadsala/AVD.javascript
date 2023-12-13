// function convertJsondata(Jsondata) {
//     try {
//         let normalData = JSON.parse(Jsondata)
//         return normalData;
        
//     } catch (error) {
//         console.log("===>",error.message);

//     }
// }
// let data = convertJsondata('{ "name": "krunal" }');
// let data = convertJsondata({ "name": "krunal" })

// console.log("data",data);
// console.log("=>>>>=>>>>");

function evenArr(arr) {
    let evenNo = arr.find((e) => e % 2 == 0);
    console.log("evenNo", evenNo);
    if (!evenNo) {
        throw new Error("please proper element in arrary");
    }
    return evenNo;
}
try {
    let evenData = evenArr([1, 3, 5, 7]);
    console.log("evenData", evenData);
    
} catch (error) {
    console.log("error==>",error.message);
}