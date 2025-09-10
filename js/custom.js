// custom.js

function getDayOfYear(date) {
  // Make sure input is a Date object
  if (!(date instanceof Date)) {
    date = new Date(date);
  }

  const start = new Date(date.getFullYear(), 0, 0); // Jan 0 = Dec 31 previous year
  const diff = date - start; // difference in milliseconds
  const oneDay = 1000 * 60 * 60 * 24; // milliseconds in a day
  const dayOfYear = Math.floor(diff / oneDay);
  return dayOfYear;
}

// Example usage:
const today = new Date();
console.log(`Today is day ${getDayOfYear(today)} of the year.`);


console.log("custom.js loaded");