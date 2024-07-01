//  Write a program in javascript to make a pyramid pattern with numbers increased by 1.


function pyramidPattern(rows) {
    let num = 2;
    for (let i = 1; i <= rows; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += num + ' ';
            num++;
        }
        console.log(row);
    }
}

const pyramidRows = 5;
pyramidPattern(pyramidRows);
