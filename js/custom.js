document.addEventListener('DOMContentLoaded', function() {
    // Get date information
    const info = getDateInfo(new Date());
    const bigDayElem = document.getElementById('day-of-year-big');
    if (bigDayElem) {
        bigDayElem.textContent = info.dayOfYear;
    }
    const todayDateElem = document.getElementById('today-date');
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

    const calendar_picker = document.getElementById('TM-calendar');
    calendar_picker.valueAsDate = new Date();

    // Update labels based on selected date
    function updateLabels(selectedDate) {
        const info_2 = getDateDistanceInfo(new Date(), selectedDate);
        const bigDayOfYearElem = document.getElementById('TM-day-of-year-big');
        if (bigDayOfYearElem) {
            bigDayOfYearElem.textContent = info_2.days;
        }
        const dayOfYearElem = document.getElementById('TM-day-of-year');
        if (dayOfYearElem) {
            dayOfYearElem.textContent = info_2.days;
        }
        const weekOfYearElem = document.getElementById('TM-week-of-year');
        if (weekOfYearElem) {
            weekOfYearElem.textContent = info_2.weeks;
        }
        const monthOfYearElem = document.getElementById('TM-month-of-year');
        if (monthOfYearElem) {
            monthOfYearElem.textContent = info_2.months;
        }
        const yearShortElem = document.getElementById('TM-year-short');
        if (yearShortElem) {
            yearShortElem.textContent = info_2.years;
        }
    }

    // Calendar date change handler
    calendar_picker.addEventListener('change', (event) => {
        let selectedDate = new Date(event.target.value);
        if (isNaN(selectedDate)) {
            // If cleared, reset to today
            calendar_picker.valueAsDate = new Date();
            selectedDate = new Date();
        }
        updateLabels(selectedDate);
    });

    // Calendar clear handler
    calendar_picker.addEventListener('input', (event) => {
        if (!calendar_picker.value) {
            // If cleared, reset to today
            calendar_picker.valueAsDate = new Date();
            updateLabels(new Date());
        }
    });

    addCopyHandler('TM-day-of-year-big-button', '#TM-day-of-year-big');
    addCopyHandler('TM-today-button', '#today-date');
    addCopyHandler('TM-day-of-year-button', '#TM-day-of-year');
    addCopyHandler('TM-week-of-year-button', '#TM-week-of-year');
    addCopyHandler('TM-month-of-year-button', '#TM-month-of-year');
    addCopyHandler('TM-year-short-button', '#TM-year-short');


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
  const formattedDate = `${pad(month)}/${pad(date.getDate())}/${year}`;

  return {
    dayOfYear,
    weekOfYear,
    month,
    year,
    date: formattedDate
  };
}


/**
 * Returns an object with dayOfYear, weekOfYear, month, year (last 2 digits), and date in month/day/year format
 * for the distance between two dates (date2 - date1).
 * All values are numbers (no leading/trailing zeros), date is a string.
 */
function getDateDistanceInfo(date1, date2) {
  if (!(date1 instanceof Date)) date1 = new Date(date1);
  if (!(date2 instanceof Date)) date2 = new Date(date2);

  // Distance in days
  const oneDay = 1000 * 60 * 60 * 24;
  const diffDays = Math.abs(Math.floor((date2 - date1) / oneDay));

  // Distance in weeks
  const diffWeeks = Math.floor(diffDays / 7);

  // Distance in months (approximate, not calendar months)
  const diffMonths = Math.floor(diffDays / 30.44); // average month length

  // Distance in years (approximate)
  const diffYears = Math.floor(diffDays / 365.25);

  return {
    days: diffDays,
    weeks: diffWeeks,
    months: diffMonths,
    years: diffYears
  };
}


// Example usage:
const info = getDateInfo(new Date());
console.log(info);







console.log("custom.js loaded");