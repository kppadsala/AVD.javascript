function triangle(num) {
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let k = num-i; k > 0; k--) {
      row += " ";

    }
    for (let j = 1; j <= ((2 * i) - 1); j++) {
      row += "*";
    }
    console.log(row);
  }
}
triangle(7);

// function printTriangle(num) {
//   for (let i = 1; i <= num; i++) {
//     let row = "";

//     // Add leading spaces for centering the triangle
//     for (let k = num - i; k > 0; k--) {
//       row += " ";
//     }

//     // Add asterisks
//     for (let j = 1; j <= 2 * i - 1; j++) {
//       row += "*";
//     }

//     console.log(row);
//   }
// }

// printTriangle(7);
// write a javascript program to Convert All Array Items to String.



