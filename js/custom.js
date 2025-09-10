document.addEventListener('DOMContentLoaded', function() {    
    // Opacity control for app pages
    const mainPage = document.getElementById('main-page');
    const secondaryPages = document.querySelectorAll('.app-page-secondary');

    function setActivePage(activePage) {
        if (mainPage) {
            if (activePage === mainPage) {
                mainPage.style.opacity = '1';
                mainPage.style.transform = 'scale(1.05)';
            } else {
                mainPage.style.opacity = '0.4';
                mainPage.style.transform = 'scale(1)';
            }
        }
        secondaryPages.forEach(page => {
            if (page === activePage) {
                page.style.opacity = '1';
                page.style.transform = 'scale(1.05)';
            } else {
                page.style.opacity = '0.4';
                page.style.transform = 'scale(1)';
            }
        });
    }

    // Initial state: only main-page is active
    setActivePage(mainPage);

    secondaryPages.forEach(page => {
        page.addEventListener('mouseenter', () => {
            setActivePage(page);
        });
        page.addEventListener('mouseleave', () => {
            setActivePage(mainPage);
        });
    });


    // TODAY
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

    const todayDayLabel = document.getElementById('T-day');
    const todayWeekLabel = document.getElementById('T-week');
    const todayMonthLabel = document.getElementById('T-month');
    const todayYearLabel = document.getElementById('T-year');



    // TIME MACHINE

    const TM_calendar_picker_1 = document.getElementById('TM-calendar');

    function resetTMCalendar() {
        const today = new Date();
        const firstOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        TM_calendar_picker_1.valueAsDate = firstOfMonth;
    }
    resetTMCalendar();

    function updateTMLabels() {
        const date1 = TM_calendar_picker_1.value ? new Date(TM_calendar_picker_1.value) : new Date();
        date1.setDate(date1.getDate() + 1);
        date1.setHours(12,0,0,0);
        const info_1 = getDateInfo(date1);
        const TM_dayOfYearElem = document.getElementById('TM-day-of-year');
        if (TM_dayOfYearElem) {
            TM_dayOfYearElem.textContent = info_1.dayOfYear;
        }
        const TM_dayOfYearBigElem = document.getElementById('TM-day-of-year-big');
        if (TM_dayOfYearBigElem) {
            TM_dayOfYearBigElem.textContent = info_1.dayOfYear;
        }
        const TM_weekOfYearElem = document.getElementById('TM-week-of-year');
        if (TM_weekOfYearElem) {
            TM_weekOfYearElem.textContent = info_1.weekOfYear;
        }
        const TM_monthOfYearElem = document.getElementById('TM-month-of-year');
        if (TM_monthOfYearElem) {
            TM_monthOfYearElem.textContent = info_1.month;
        }
        const TM_yearShortElem = document.getElementById('TM-year-short');
        if (TM_yearShortElem) {
            TM_yearShortElem.textContent = info_1.year;
        }
    }


    TM_calendar_picker_1.addEventListener('change', () => {
        if (!TM_calendar_picker_1.value) {
            TM_calendar_picker_1.valueAsDate = new Date();
        }
        updateTMLabels();
    });

    TM_calendar_picker_1.addEventListener('input', () => {
        if (!TM_calendar_picker_1.value) {
            TM_calendar_picker_1.valueAsDate = new Date();
            updateTMLabels();
        }
    });

    updateTMLabels();
    addCopyHandler('TM-day-of-year-big-button', '#TM-day-of-year-big');
    addCopyHandler('TM-day-of-year-button', '#TM-day-of-year');
    addCopyHandler('TM-week-of-year-button', '#TM-week-of-year');
    addCopyHandler('TM-month-of-year-button', '#TM-month-of-year');
    addCopyHandler('TM-year-short-button', '#TM-year-short');


    const timeMachineDayLabel = document.getElementById('TM-day');
    const timeMachineWeekLabel = document.getElementById('TM-week');
    const timeMachineMonthLabel = document.getElementById('TM-month');
    const timeMachineYearLabel = document.getElementById('TM-year');



    // DURATION
    const calendar_picker_1 = document.getElementById('DR-calendar-1');
    const calendar_picker_2 = document.getElementById('DR-calendar-2');
    function resetDurationCalendars() {
        const today = new Date();
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        calendar_picker_1.valueAsDate = startOfMonth;
        calendar_picker_2.valueAsDate = today;
    }
    resetDurationCalendars();

    // Update labels based on both selected dates
    function updateLabels() {
        const date1 = calendar_picker_1.value ? new Date(calendar_picker_1.value) : new Date();
        const date2 = calendar_picker_2.value ? new Date(calendar_picker_2.value) : new Date();
        const info_2 = getDateDistanceInfo(date1, date2);
        const bigDayOfYearElem = document.getElementById('DR-day-of-year-big');
        if (bigDayOfYearElem) {
            bigDayOfYearElem.textContent = info_2.days;
        }
        const dayOfYearElem = document.getElementById('DR-day-of-year');
        if (dayOfYearElem) {
            dayOfYearElem.textContent = info_2.days;
        }
        const weekOfYearElem = document.getElementById('DR-week-of-year');
        if (weekOfYearElem) {
            weekOfYearElem.textContent = info_2.weeks;
        }
        const monthOfYearElem = document.getElementById('DR-month-of-year');
        if (monthOfYearElem) {
            monthOfYearElem.textContent = info_2.months;
        }
        const yearShortElem = document.getElementById('DR-year-short');
        if (yearShortElem) {
            yearShortElem.textContent = info_2.years;
        }

        const durationDayLabel = document.getElementById('DR-day');
        const durationWeekLabel = document.getElementById('DR-week');
        const durationMonthLabel = document.getElementById('DR-month');
        const durationYearLabel = document.getElementById('DR-year');

        if (info_2.days === 1) {
            durationDayLabel.textContent = 'Day';
        } else {
            durationDayLabel.textContent = 'Days';
        }
        if (info_2.weeks === 1) {
            durationWeekLabel.textContent = 'Week';
        } else {
            durationWeekLabel.textContent = 'Weeks';
        }
        if (info_2.months === 1) {
            durationMonthLabel.textContent = 'Month';
        } else {
            durationMonthLabel.textContent = 'Months';
        }
        if (info_2.years === 1) {
            durationYearLabel.textContent = 'Year';
        } else {
            durationYearLabel.textContent = 'Years';
        }

    }

    // Calendar date change handler
    calendar_picker_1.addEventListener('change', () => {
        if (!calendar_picker_1.value) {
            calendar_picker_1.valueAsDate = new Date();
        }
        updateLabels();
    });
    calendar_picker_2.addEventListener('change', () => {
        if (!calendar_picker_2.value) {
            calendar_picker_2.valueAsDate = new Date();
        }
        updateLabels();
    });

    // Calendar clear handler
    calendar_picker_1.addEventListener('input', () => {
        if (!calendar_picker_1.value) {
            calendar_picker_1.valueAsDate = new Date();
            updateLabels();
        }
    });
    calendar_picker_2.addEventListener('input', () => {
        if (!calendar_picker_2.value) {
            calendar_picker_2.valueAsDate = new Date();
            updateLabels();
        }
    });

    // On reload, set both to today and update labels
    updateLabels();

    addCopyHandler('DR-day-of-year-big-button', '#DR-day-of-year-big');
    addCopyHandler('DR-today-button', '#today-date');
    addCopyHandler('DR-day-of-year-button', '#DR-day-of-year');
    addCopyHandler('DR-week-of-year-button', '#DR-week-of-year');
    addCopyHandler('DR-month-of-year-button', '#DR-month-of-year');
    addCopyHandler('DR-year-short-button', '#DR-year-short');


});


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

    // Calendar-based months
    let d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
    let d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
    if (d2 < d1) {
        [d1, d2] = [d2, d1];
    }
    let months = (d2.getFullYear() - d1.getFullYear()) * 12 + (d2.getMonth() - d1.getMonth());
    if (d2.getDate() < d1.getDate()) {
        months--;
    }
    // If negative, set to 0
    months = Math.max(0, months);

    // Calendar-based years
    let years = d2.getFullYear() - d1.getFullYear();
    if (
        d2.getMonth() < d1.getMonth() ||
        (d2.getMonth() === d1.getMonth() && d2.getDate() < d1.getDate())
    ) {
        years--;
    }
    years = Math.max(0, years);

    return {
        days: diffDays,
        weeks: diffWeeks,
        months: months,
        years: years
    };
}




console.log("custom.js loaded");