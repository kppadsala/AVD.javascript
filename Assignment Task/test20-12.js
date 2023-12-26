// const classResult = require("./testData");
const classResult = [
  {
    name: "Vinay",
    marks: [
      {
        subject: "Hindi",
        marks: 81,
      },
      {
        subject: "English",
        marks: 50,
      },
      {
        subject: "Gujarati",
        marks: 92,
      },
      {
        subject: "Maths",
        marks: 88,
      },
    ],
  },
  {
    name: "Sanjay",
    marks: [
      {
        subject: "Hindi",
        marks: 33,
      },
      {
        subject: "English",
        marks: 77,
      },
      {
        subject: "Gujarati",
        marks: 99,
      },
      {
        subject: "Maths",
        marks: 97,
      },
    ],
  },
  {
    name: "Tushar",
    marks: [
      {
        subject: "Hindi",
        marks: 91,
      },
      {
        subject: "English",
        marks: 88,
      },
      {
        subject: "Gujarati",
        marks: 97,
      },
      {
        subject: "Maths",
        marks: 99,
      },
    ],
  },
];
//(1)==> find all students percentage


let Newper = classResult.map((e) => {
    let totalMarks = 0;

  e.marks.map((subject) => {
    totalMarks += subject.marks;
  });

  let percentage = (totalMarks / (e.marks.length * 100)) * 100;

  // If there are missing marks, set percentage to -1
  if (isNaN(percentage)) {
    percentage = -1;
  }
  
  return {name:e.name,percentage};
  
});
console.log("Newper==>", Newper);


//(2)==> give hiegest percentage holder name

let holderName=Newper.sort((a,b) => b.percentage - a.percentage)
holderName.forEach((e) => {
    console.log(`${e.name}==>${e.percentage}`);
})
console.log(" holderName of High Persentage ==>", holderName[0].name)

// give who have heigest percentage subject vise


