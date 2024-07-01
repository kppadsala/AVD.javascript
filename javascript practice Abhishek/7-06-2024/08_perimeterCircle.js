// Write a javascript program to compute the perimeter and area of a circle with a given radius.

function perimeterCircle(radius) {
    const perimeter = 2 * Math.PI * radius;
    return perimeter;
}

function perimeterCircle(radius) {
    const area = Math.PI * radius * radius;
    return area;
}

const radius = 5;
const perimeter = perimeterCircle(radius);
const area = perimeterCircle(radius);

console.log("Radius:", radius);
console.log("Perimeter:", perimeter);
console.log("Area:", area);
