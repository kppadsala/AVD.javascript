let arr = [
    null,
    undefined,
    "string",
    9999,
    { name: "krunal", age: 23 },
    [1, 2, 3, 4, 5],
    function printarr() {
        console.log("----arr function-------->");
    },
];
arr[6]();
console.log("==========", arr[4].age);