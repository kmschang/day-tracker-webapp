document.addEventListener('DOMContentLoaded', function() {
  // Get date information
  const info = getDateInfo(new Date());
  const bigDayElem = document.querySelector('.app-page#main-page .copy-button #day-of-year-big');
  if (bigDayElem) {
    bigDayElem.textContent = info.dayOfYear;
  }
  const todayDateElem = document.querySelector('.app-page#main-page .copy-button #today-date');
  if (todayDateElem) {
    todayDateElem.textContent = info.date;
  }
  const dayOfYearElem = document.getElementById('day-of-year');
  if (dayOfYearElem) {
    dayOfYearElem.textContent = info.dayOfYear;
  }
  const weekOfYearElem = document.getElementById('week-of-year');
  if (weekOfYearElem) {
    weekOfYearElem.textContent = info.weekOfYear;
  }
  const monthOfYearElem = document.getElementById('month-of-year');
  if (monthOfYearElem) {
    monthOfYearElem.textContent = info.month;
  }
  const yearShortElem = document.getElementById('year-short');
  if (yearShortElem) {
    yearShortElem.textContent = info.year;
  }

  // Clipboard copy functionality for all buttons
  function addCopyHandler(buttonId, valueSelector) {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener('click', function() {
        let valueElem;
        if (valueSelector) {
          valueElem = button.querySelector(valueSelector);
        } else {
          valueElem = button;
        }
        const value = valueElem ? valueElem.textContent.trim() : '';
        navigator.clipboard.writeText(value)
          .then(() => {
            console.log('Copied to clipboard:', value);
          })
          .catch(err => {
            console.error('Failed to copy:', err);
          });
      });
    }
  }

  addCopyHandler('day-of-year-big-button', '#day-of-year-big');
  addCopyHandler('today-button', '#today-date');
  addCopyHandler('day-of-year-button', '#day-of-year');
  addCopyHandler('week-of-year-button', '#week-of-year');
  addCopyHandler('month-of-year-button', '#month-of-year');
  addCopyHandler('year-short-button', '#year-short');



});
// custom.js

/**
 * Returns an object with dayOfYear, weekOfYear, month, year (last 2 digits), and date in day/month/year format.
 * All values are numbers (no leading/trailing zeros), date is a string.
 */
function getDateInfo(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }

  // Day of year
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  // Week of year (ISO week, but starting from 1)
  const jan1 = new Date(date.getFullYear(), 0, 1);
  const daysSinceJan1 = Math.floor((date - jan1) / oneDay);
  const weekOfYear = Math.floor((daysSinceJan1 + jan1.getDay()) / 7) + 1;

  // Month (1-12)
  const month = date.getMonth() + 1;

  // Year (last 2 digits)
  const year = Number(String(date.getFullYear()).slice(-2));

  // Date in day/month/year format with leading zeros for day and month
  const pad = n => n < 10 ? '0' + n : n;
  const formattedDate = `${pad(date.getDate())}/${pad(month)}/${year}`;

  return {
    dayOfYear,
    weekOfYear,
    month,
    year,
    date: formattedDate
  };
}

// Example usage:
const info = getDateInfo(new Date());
console.log(info);



console.log("custom.js loaded");