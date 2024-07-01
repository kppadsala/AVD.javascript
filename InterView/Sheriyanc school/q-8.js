// write a function  how many word reapete in array. 

function occ(str) {
    var occerence={}
    str.split("").map((e)=>{
        if (occerence.hasOwnProperty(e)===false){
            occerence[e]=1
        }
        else{
            occerence[e]++
        }

    })
    return occerence
}
console.log(occ("hello"));
//output= { h: 1, e: 1, l: 2, o: 1 }