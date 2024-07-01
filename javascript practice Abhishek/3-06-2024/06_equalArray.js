//  Write a JavaScript program to Check if all array elements are equal


function equalArray(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            return false;
        }
    }
    return true;
}

let array1 = [1, 5, 1, 1];
console.log(equalArray(array1)); 


