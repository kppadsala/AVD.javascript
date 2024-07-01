// Write a javascript program to convert a given integer (in days) to years, months and days, assuming that all months have 30 days and all years have 365 days

function convertDays(totalDays) {
    const daysInYear = 365;
    const daysInMonth = 30;

    let years = Math.floor(totalDays / daysInYear);
    let remainingDays = totalDays % daysInYear;
    let months = Math.floor(remainingDays / daysInMonth);
    let days = remainingDays % daysInMonth;

    return {
        years: years,
        months: months,
        days: days
    };
}

// Example usage:
let totalDays = 2535;
let result = convertDays(totalDays);

console.log(`${totalDays} days is equivalent to ${result.years} years, ${result.months} months, and ${result.days} days.`);
