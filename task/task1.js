let userData = [
  {
    name: "krunal",
    age: 22,
    hobby: ["reading", "travel", "playing"],
  },
  {
    name: "khushal",
    age: 20,
    hobby: ["travel", "playing", "reading"],
  },
  {
    name: "bhargav",
    age: 24,
    hobby: ["travel", "playing", "cooking"],
  },
  {
    name: "parth",
    age: 21,
    hobby: ["playing", "reading", "travel"],
  },
  {
    name: "meet",
    age: 23,
    hobby: ["reading", "travel", "cooking"],
  },
];


for (let i = 0; i <= 4; i++){
    
    console.log("My Name is", userData[i].name+' And My Hobby is  '+ userData[i].hobby[2]);
    
}