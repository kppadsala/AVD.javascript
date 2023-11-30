let toDay = new Date("11/08/2023");
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let days = [
  "Sunday",
  "Monday",
  "TuesDay",
  "WednesDay",
  "ThursDay",
  "Friday",
  "SaturDay",
];

let date = toDay.getDate();
let month = months.getMonth();
let year
console.log("===>", toDay.getDate(), months.getMonth(), days.getFullYear());

let dayIndex = toDay.getDay();

console.log(`Today is ${days[dayIndex]}`);
// console.log(
//   `Today is ${days.toString().padStart(2, "0")} ${months[month]}, ${year}`
// );