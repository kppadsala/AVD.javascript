const arr = require("./jsonData");

//=========== Task-1. import data from json ==========


// ======== Taks-2. give all city name of state which one give by user ========

// function getCityByState(stateName) {
//   let filterStateData = arr.filter((cityData) => {
//     return cityData.state_name == stateName;
//   })
//   return filterStateData;
// }
// let userStateInput = "Karnātaka";
//let userInput = getCityByState(userStateInput);
// console.log("userInput", userInput);
// console.log("userInput", userInput.length);

// ======= Taks-3. give all city name , which have more character than user given input========


// function getCityByStateName (stateName) {
//   let filterStateData = arr.filter((CityData) => {
//     return CityData.state_name==stateName
//   })
//   let cites = filterStateData.map((CitesData) => {
//     return CitesData.city
//   })
//   return cites;
//   // return filterStateData;
// }
// let userStateInput = "Bihār";
// let userInput = getCityByStateName(userStateInput);
// // console.log("userInput:", userInput)
// // console.log("userInput:", userInput.length);
// let cityMoreSixCh = userInput.filter((city) => {
//   // return city.length > 6;
//   return city.length < 6;
// })
// console.log(`All Cities in ${userStateInput}`, cityMoreSixCh);
// console.log(`How Much cities in  ${userStateInput} With Lessthan Six Character`, cityMoreSixCh.length);

// ======= Taks-4. city list which has population more then user give========

// function filterCitiesByPopulation(populationThreshold) {
//   return arr.filter((city) => JSON.parse(city.population) > populationThreshold);
// }

// let userPopulationThreshold = 10000000;
// let filteredCities = filterCitiesByPopulation(userPopulationThreshold);

// console.log("filteredCities==>",filteredCities);
// console.log("filteredCities==>",filteredCities.length);

// 5.acending decending population wise

// asending
let asePOP=arr.sort((a, b) => a.population - b.population);
asePOP.forEach((e) => {
  console.log(`${e.state_name}==>${e.population}`);
});

// desending
let desPOP=arr.sort((a, b) => b.population - a.population);
desPOP.forEach((e) => {
  console.log(`${e.state_name}==>${e.population}`);
});

//========== 7. give total populatin of state which give by user=========


