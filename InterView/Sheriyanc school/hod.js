const clients=(name)=>{
if(name === "krunal"){
    return function (topic) {
        console.log(`hiii ${name} . Topic is ${topic}. let me explain`);
    }
}
if(name === "nirmal"){
    return function (topic) {
        console.log(`hiii ${name} . Topic is ${topic}. let me explain`);
    }
}
if(name === "parth"){
    return function (topic) {
        console.log(`hiii ${name} . Topic is ${topic}. let me explain`);
    }
}
if(name === "harsh"){
    return function (topic) {
        console.log(`hiii ${name} . Topic is ${topic}. let me explain`);
    }
}
}
// HOD DEFINED 
clients("krunal")("cars");
clients("nirmal")("boat");
clients("parth")("bus");
clients("harsh")("bike");
